from django.conf.urls import include, url
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
	url(r'^admin/', admin.site.urls),
	url(r'^$', views.home),
	url(r'^form/', views.form),
	url(r'^dash/home', views.dash),
	url(r'^dash/charts', views.charts),
	url(r'^dash/modals', views.modals),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
