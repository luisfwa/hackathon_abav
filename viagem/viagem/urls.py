from django.conf import settings
from django.conf.urls import include, url #nunca esquecer de incluir o include
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('viajante.urls')), 
    url(r'^form/$', include('viajante.urls')),
    url(r'^dash/$', include('viajante.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

