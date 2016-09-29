from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Pessoa(models.Model):
	email = models.EmailField()
	nome = models.CharField(max_length=120, blank=False, null=False)
	senha = models.CharField(max_length=20, blank=False, null=False)
	timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
	updated = models.DateTimeField(auto_now_add=False, auto_now=True)


	def __str__(self):
		return self.nome


class Tema(models.Model):
	nome = models.CharField(max_length=120, blank=False, null=False)

	def __str__(self):
		return self.nome


class Viajante(Pessoa):
	idade = models.IntegerField(null=False, blank=False)
	dinheiro = models.FloatField(null=False, blank=False)
	tema = models.ForeignKey(Tema, verbose_name="Tema")


class Agencia(models.Model):
	nome = models.CharField(max_length=120, blank=False, null=False)
	associacao = models.CharField(max_length=120, blank=False, null=False)

	def __str__(self):
		return self.nome

class Agente(Pessoa):
	agencia = models.ForeignKey(Agencia, related_name="Agencia")
	telefone = models.CharField(max_length=15, blank=False, null=False)
	cpf = models.CharField(max_length=15, blank=False, null=False)


class Cidade(models.Model):
	nome = models.CharField(max_length=120, blank=False, null=False)
	iata = models.CharField(max_length=3, blank=False, null=False)

	def __str__(self):
		return self.iata



class Viagem(models.Model):
	destino = models.ForeignKey(Cidade, related_name="Destino")
	data_partida = models.DateTimeField(auto_now_add=False, auto_now=False)
	duracao = models.IntegerField(null=False, blank=False)
	dinheiro_total = models.FloatField(null=True, blank=True)
	origem = models.ForeignKey(Cidade, related_name="Origem")


	def __str__(self):
		return self.destino


