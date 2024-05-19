from django.urls import path
from .views import actions_on_page

urlpatterns = [
    path('', actions_on_page),
]
