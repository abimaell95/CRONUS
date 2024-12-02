from django.db import models


class ProductivityReportModel(models.Model):
    invoice_num = models.CharField(primary_key=True, max_length=20)
    range = models.CharField(max_length=10)
    type_id = models.IntegerField()
    type_label = models.CharField(max_length=20)
    schedule_date = models.DateTimeField()
    end_datetime = models.DateTimeField()
    step_start = models.DateTimeField()
    step_end = models.DateTimeField()
    state_label = models.CharField(max_length=20, default="default")
    state_id = models.IntegerField()
    branch_id = models.IntegerField()


class OrdersResumeModel(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20)
    state_id = models.IntegerField()
    branch_id = models.IntegerField()
