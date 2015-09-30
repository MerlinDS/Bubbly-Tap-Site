var currentColorTheme = 'vanilla-theme';

function changeColorTheme(themeId){
    if(currentColorTheme != themeId)
    {
        document.getElementById('color-theme').setAttribute('href', 'css/' + themeId + '.css');
        currentColorTheme = themeId;
    }
}