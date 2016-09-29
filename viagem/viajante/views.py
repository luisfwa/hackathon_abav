from django.shortcuts import render
from forms import SignUpViajante, LoginViajante
from models import Viajante

def home(request):
	return render(request, "home.html", {})

def form(request):
	form = SignUpViajante(request.POST or None)
	form2 = LoginViajante(request.POST or None)
	context = {
		'form': form,
		'form2': form2,
	}
	return render(request, "form.html", context)


def dash(request):
	
	form2 = LoginViajante(request.POST or None)
	context = {
		'form2': form2,
	}

	

	if form2.is_valid():
		instance = form2.save(commit=False)
		if len(list(Viajante.objects.all().filter(email=instance.email, senha=instance.senha))) != 0:
			context = {
				'nome': list(Viajante.objects.all().filter(email=instance.email))[0].nome
			}	
			return render(request, "index.html", context)
			

	
	return render(request, 'form.html', context)

	

def primeiros_passos(request):

	form = SignUpViajante(request.POST or None)
	
	if form.is_valid():
		instance = form.save(commit=False)
		instance.save()
		context = {
			'viajante': list(Viajante.objects.all().filter(email=instance.email))[0],
		}
		return render(request, "primeiros_passos.html", context)
	return render(request, "form.html", {})

def modals(request):
	return render(request, "base_ui_modals_tooltips.html", {});
