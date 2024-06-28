
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite('resources/css/app.css')

</head>

<body>

    <div id="app">

        @include('sections.header')

        @yield('content')

        @include('sections.footer')
    </div>

</body>

</html>