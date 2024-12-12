from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

# Create your views here.
def indexView(request):
    # return HttpResponse("You are in the wrong place")
    return JsonResponse({"message": "Success"}, status=200)

def testView(request):
    if request.method == "POST":
        return JsonResponse({'a':request.POST})
    return HttpResponse("You are in the wrong place")