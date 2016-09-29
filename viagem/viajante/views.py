from django.shortcuts import render
from forms import SignUpViajante

def home(request):
	form = SignUpViajante(request.POST or None)
	context = {
		'form': form,
	}
	
	if form.is_valid():
		instance = form.save(commit=False)
		instance.save()
	return render(request, "home.html", context)


def form(request):
	form = SignUpViajante(request.POST or None)
	context = {
		'form': form,
	}
	return render(request, "form.html", context)