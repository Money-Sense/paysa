from django.shortcuts import render
import requests
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import viewsets,permissions
from transaction.serializers import TransactionSerializer
from transaction.models import transaction_details


class TransactionView(viewsets.ModelViewSet):
    queryset = transaction_details.objects.all()
    serializer_class = TransactionSerializer

  
@permission_classes((permissions.AllowAny,)) 
@api_view(['POST']) 
def transaction_req(request):
    headers = {"Authorization" : "Bearer 226a0989-be98-3cdb-9913-51887eb1f9c4",'Content-type': 'application/xml'}
    url = "https://api.infinit.co.in/upi/2.0/ReqPay/2.0/urn:txnid:NPC26a34180ade64ef09327837823086log"
    body = """<upi:ReqPay xmlns:upi="http://npci.org/upi/schema/">
    <Head ver="2.0" ts="2018-02-17T13:39:54.939+05:30" orgId="112233" msgId="NPC7215eda0afca42a1aa410a2d0349f263"/>
    <Txn id="NPC26a34180ade64ef09327837823086log" note="testpay" custRef="804813039157" refId="804813039157" refUrl="http://axis.com/upi" ts="2018-02-17T13:39:54.944+05:30" type="PAY" initiationMode="12" purpose="00"/>
    <Payer addr="ram@axis" name="ram" seqNum="1" type="ENTITY" code="0000">
        <Info>
            <Identity id="058010100083492" type="ACCOUNT" verifiedName="Ram"/>
            <Rating VerifiedAddress="TRUE"/>
        </Info>
        <Device>
            <Tag name="MOBILE" value="918149033167"/>
            <Tag name="GEOCODE" value="34.7273,74.8278"/>
            <Tag name="LOCATION" value="pune"/>
            <Tag name="IP" value="192.68.0.12"/>
            <Tag name="TYPE" value="MOB"/>
            <Tag name="ID" value="3356"/>
            <Tag name="OS" value="ios"/>
            <Tag name="APP" value="10000629091"/>
            <Tag name="CAPABILITY" value="1234556789"/>
        </Device>
        <Ac addrType="ACCOUNT">
            <Detail name="ACTYPE" value="SAVINGS"/>
            <Detail name="ACNUM" value="050000"/>
            <Detail name="IFSC" value="IFSC3567655"/>
        </Ac>
        <Creds>
            <Cred type="PIN" subType="MPIN">
                <Data code="NPCI" ki="20150822">
                                             base-64 encoded/encrypted authentication data                    
                </Data>
            </Cred>
        </Creds>
        <Amount value="05.00" curr="INR">
            <Split name="PURCHASE" value="1"/>
        </Amount>
    </Payer>
    <Payees>
        <Payee addr="laxmi@boi" name="AS" seqNum="1" type="PERSON" code="4000">
            <Device>
                <Tag name="MOBILE" value="918149033167"/>
                <Tag name="GEOCODE" value="34.7273,74.8278"/>
                <Tag name="LOCATION" value="pune"/>
                <Tag name="IP" value="192.68.0.12"/>
                <Tag name="TYPE" value="MOB"/>
                <Tag name="ID" value="3356"/>
                <Tag name="OS" value="ios"/>
                <Tag name="APP" value="10000629091"/>
                <Tag name="CAPABILITY" value="1234556789"/>
            </Device>
            <Amount value="05.00" curr="INR">
                <Split name="PURCHASE" value="1"/>
            </Amount>
        </Payee>
    </Payees>
</upi:ReqPay>"""
    data = requests.post(url,data=body,headers=headers)
    # json_data = data.json()
    if data.status_code == 200 :
        return Response(data,headers=headers)
    else:
        print("fail")
        return Response(data,headers=headers)

# def transaction(request):
#     response = request.POST.get("http://freegeoip.net/json/")
#     geodata = response

#     return render(request, 'transaction/home.html')
