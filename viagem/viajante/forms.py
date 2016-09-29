from django import forms

from .models import *

class SignUpCidade(forms.ModelForm):
	class Meta:
		model = Cidade
		fields = ["nome", "iata"]

class SignUpViajante(forms.ModelForm):
	class Meta:
		model = Viajante
		fields = ["nome", "email", "senha", "telefone"]



class LoginViajante(forms.ModelForm):
	class Meta:
		model = Viajante
		fields = ["email", "senha"]


class SignUpTema(forms.ModelForm):
	class Meta:
		model = Tema
		fields = ["nome"]


class SignUpAgencia(forms.ModelForm):
	class Meta:
		model = Agencia
		fields = ["nome", "associacao"]


class SignUpAgente(forms.ModelForm):
	class Meta:
		model = Agente
		fields = ["nome", "email", "senha", "agencia", "telefone", "cpf"]


class SignUpViagem(forms.ModelForm):
	class Meta:
		model = Viagem
		fields = ["destino", "data_partida", "duracao", "origem"]

