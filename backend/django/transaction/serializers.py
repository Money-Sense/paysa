from rest_framework import serializers
from transaction.models import transaction_details

class TransactionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = transaction_details
        fields = ['userid', 'transaction_id', 'amount','payee_id','payer_id','transaction_timestamp','location','transaction_status','transaction_type']
