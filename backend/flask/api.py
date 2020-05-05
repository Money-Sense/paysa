import requests as r
import time
import xmltodict
import json
import os

from flask import Flask, jsonify
from flask_restful import Api, Resource, request

app = Flask(__name__)
api = Api(app)


class Payment(Resource):
    @staticmethod
    def post():
        req = request.get_json()
        txn_id = "NPC26a34180ade64ef0932783" + str(int(time.time()))

        city = "chennai"
        remote_address = request.remote_addr
        payer_name = req["payerName"]
        payer_mobile_num = req["payerMobileNum"]
        payer_address = req["payerAddress"]
        payer_acc_type = req["payerAccType"]
        payer_acc_num = req["payerAccNum"]
        payer_ifsc = req["payerIfsc"]
        amount = req["amount"]
        payee_name = req["payeeName"]
        payee_mobile_num = req["payeeMobileNum"]
        payee_address = req["payeeAddress"]

        data = f'''
        <upi:ReqPay xmlns:upi="http://npci.org/upi/schema/">
            <Head ver="2.0" ts="2018-02-17T13:39:54.939+05:30" orgId="112233" msgId="NPC7215eda0afca42a1aa410a2d0349f263"/>
            <Txn id="{txn_id}" note="testpay" custRef="804813039157" refId="804813039157" refUrl="http://axis.com/upi" 
                    ts="2018-02-17T13:39:54.944+05:30" type="PAY" initiationMode="12" purpose="00"/>
            <Payer addr="{payer_address}" name="{payer_name}" seqNum="1" type="ENTITY" code="0000">
                <Info>
                    <Identity id="058010100083492" type="ACCOUNT" verifiedName="{payer_name}"/>
                    <Rating VerifiedAddress="TRUE"/>
                </Info>
                <Device>
                    <Tag name="MOBILE" value="{payer_mobile_num}"/>
                    <Tag name="GEOCODE" value="34.7273,74.8278"/>
                    <Tag name="LOCATION" value="{city}"/>
                    <Tag name="IP" value="{remote_address}"/>
                    <Tag name="TYPE" value="MOB"/>
                    <Tag name="ID" value="3356"/>
                    <Tag name="OS" value="ios"/>
                    <Tag name="APP" value="10000629091"/>
                    <Tag name="CAPABILITY" value="1234556789"/>
                </Device>
                <Ac addrType="ACCOUNT">
                    <Detail name="ACTYPE" value="{payer_acc_type}"/>
                    <Detail name="ACNUM" value="{payer_acc_num}"/>
                    <Detail name="IFSC" value="{payer_ifsc}"/>
                </Ac>
                <Creds>
                    <Cred type="PIN" subType="MPIN">
                        <Data code="NPCI" ki="20150822">
                                                     Z29vZGJveXV2                   
                        </Data>
                    </Cred>
                </Creds>
                <Amount value="{amount}" curr="INR">
                    <Split name="PURCHASE" value="1"/>
                </Amount>
            </Payer>
            <Payees>
                <Payee addr="{payee_address}" name="{payee_name}" seqNum="1" type="PERSON" code="4000">
                    <Device>
                        <Tag name="MOBILE" value="{payee_mobile_num}"/>
                        <Tag name="GEOCODE" value="34.7273,74.8278"/>
                        <Tag name="LOCATION" value="{city}"/>
                        <Tag name="IP" value="{remote_address}"/>
                        <Tag name="TYPE" value="MOB"/>
                        <Tag name="ID" value="3356"/>
                        <Tag name="OS" value="ios"/>
                        <Tag name="APP" value="10000629091"/>
                        <Tag name="CAPABILITY" value="1234556789"/>
                    </Device>
                    <Amount value="{amount}" curr="INR">
                        <Split name="PURCHASE" value="1"/>
                    </Amount>
                </Payee>
            </Payees>
        </upi:ReqPay>
        '''

        access_token = "501aa8d5-eafb-3254-8dc6-4db88bb6a6e2"

        headers = {
            "Authorization": f"Bearer {access_token}",
            'Content-Type': 'application/xml',
            'Accept': 'application/xml'
        }

        res = r.post(url=f"https://api.infinit.co.in/upi/2.0/ReqPay/2.0/urn:txnid:{txn_id}",
                     data=data,
                     headers=headers)
        response = res.content.decode('utf-8')
        print(response)
        parsed_xml = xmltodict.parse(response)
        if "ns2:RespPay" in parsed_xml and parsed_xml["ns2:RespPay"]["Resp"]["@result"] == "SUCCESS":
            response_json = json.dumps(parsed_xml)
            # print(res.status_code, response_json)
            return response_json, 200
        else:
            _response = jsonify(message="Transaction failed.")
            _response.status_code = 400
            return _response


api.add_resource(Payment, "/pay/")

port = int(os.environ.get("PORT", 5000))
app.run('0.0.0.0', port=port)
