from django.db import models

class transaction_details(models.Model):
    userid = models.CharField(max_length=50) 
    transaction_id = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=20,decimal_places=2)
    payee_id = models.CharField(max_length=50)
    payer_id = models.CharField(max_length=50)
    transaction_timestamp = models.DateTimeField()
    location = models.CharField(max_length=20)
    transaction_status = models.CharField(max_length=10)
    transaction_type = models.CharField(max_length=10)

class roundoff_transaction(models.Model):
    transaction_id = models.ForeignKey(transaction_details,on_delete=models.CASCADE)
    money_offset = models.IntegerField()
    roundoff_amt = models.DecimalField(max_digits=20,decimal_places=2)
    roundoff_trans_id = models.CharField(max_length=50)