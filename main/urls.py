from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import my_view  # Импортируем представление

urlpatterns = [
    path('', my_view, name='my-url-name'),  # Определите URL и свяжите его с представлением
]  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)