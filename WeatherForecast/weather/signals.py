from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from .models import Event
import datetime

@receiver(signal=post_save, sender=Event)
def create_account(sender, instance, created, **kwargs):
    if created:
        print(instance.event_start)

        # create_default_participant = Participant(
        #     user=instance,
        #     channel_name="default"
        # )
        # create_default_participant.save()