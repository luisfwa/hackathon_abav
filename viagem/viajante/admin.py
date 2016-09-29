from django.contrib import admin

from .forms import *
from .models import *


class SignUpAdmin(admin.ModelAdmin):
	list_display = ["__str__", "nome", "iata"]
	form = SignUpCidade

admin.site.register(Cidade, SignUpAdmin)

class ViajanteAdmin(admin.ModelAdmin):
	list_display = ["__str__", "nome", "email"]
	form = SignUpViajante

admin.site.register(Viajante, ViajanteAdmin)

class TemaAdmin(admin.ModelAdmin):
	list_display = ["__str__", "nome"]
	form = SignUpTema

admin.site.register(Tema, TemaAdmin)

class AgenciaAdmin(admin.ModelAdmin):
	list_display = ["__str__", "nome", "associacao"]
	form = SignUpAgencia

admin.site.register(Agencia, AgenciaAdmin)

class AgenteAdmin(admin.ModelAdmin):
	list_display = ["__str__", "nome", "email"]
	form = SignUpAgente

admin.site.register(Agente, AgenteAdmin)

class  ViagemAdmin(admin.ModelAdmin):
	list_display = ["__str__", "destino", "dinheiro_total"]
	form = SignUpViagem

admin.site.register(Viagem, ViagemAdmin)
