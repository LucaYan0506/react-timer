from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token

# Create your views here.
@ensure_csrf_cookie
def indexView(request):
    csrf_token = get_token(request)
    response_data = {'token': csrf_token}
    response = JsonResponse(response_data)
    response.set_cookie('csrftoken', csrf_token)
    return response

def testView(request):
    if request.method == "POST":
        return JsonResponse({'a':request.POST})
    return HttpResponse("You are in the wrong place")