from django.shortcuts import render

def home(request):
	print (request)
	context = {'nome' : 'Diego'}
	return render(request, "home.html", context)


def form(request):
	print (request)
	return render(request, "form.html", {})