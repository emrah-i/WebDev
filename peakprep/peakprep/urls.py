from django.contrib import admin
from django.urls import path, re_path
from django.shortcuts import render
from django.views.generic import TemplateView

def render_react(request):
    return render(request, "index.html")

urlpatterns = [
  path("admin/", admin.site.urls),
  path('', TemplateView.as_view(template_name="index.html"))
]
