from django.shortcuts import render

def index_view(request):
    items = [
        {'id': 1, 'label': 'All pages'},
        {'id': 2, 'label': 'Page 1'},
        {'id': 3, 'label': 'Page 2'},
        {'id': 4, 'label': 'Page 3'},
        {'id': 5, 'label': 'Page 4'},
    ]
    return render(request, 'frame/index.html', {'items': items})