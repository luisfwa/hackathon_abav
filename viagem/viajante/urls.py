from django.conf.urls import include, url
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
	url(r'^$', views.home),
	url(r'^form/', views.form),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
