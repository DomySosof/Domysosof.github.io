
// Establece la propiedad de posición del cuerpo del documento a 'relative'
document.body.style.position = 'relative';

// Crea un nuevo elemento div y lo asigna a la variable 'container'
var container = document.createElement('div');
// Agrega el elemento 'container' al cuerpo del documento
document.body.appendChild(container);

// Define el ancho y la altura del gráfico
var width = 800;
var height = 400;

// Crea un nuevo gráfico utilizando la biblioteca LightweightCharts
var chart = LightweightCharts.createChart(container, {
    // Establece el ancho y la altura del gráfico
    width: width,
    height: height,
    // Configura la escala de precios del lado izquierdo del gráfico
    leftPriceScale: {
        scaleMargins: {
            // Establece los márgenes de la escala
            top: 0.2,
            bottom: 0.2,
        },
        // Hace visible la escala de precios
        visible: true,
        // Oculta el borde de la escala de precios
        borderVisible: false,
    },
    // Oculta la escala de precios del lado derecho del gráfico
    rightPriceScale: {
        visible: false,
    },
    // Configura la escala de tiempo del gráfico
    timeScale: {
        // Oculta el borde de la escala de tiempo
        borderVisible: false,
    },
    // Configura la cuadrícula del gráfico
    grid: {
        horzLines: {
            // Establece el color de las líneas horizontales de la cuadrícula
            color: '#ffffff',
        },
        vertLines: {
            // Establece el color de las líneas verticales de la cuadrícula
            color: '#ffffff',
        },
    },
    // Configura la cruz del gráfico
    crosshair: {
        horzLine: {
            // Oculta la línea horizontal de la cruz
            visible: false,
            // Oculta la etiqueta de la línea horizontal de la cruz
            labelVisible: false
        },
        vertLine: {
            // Hace visible la línea vertical de la cruz
            visible: true,
            // Establece el estilo de la línea vertical de la cruz
            style: 0,
            // Establece el ancho de la línea vertical de la cruz
            width: 2,
            // Establece el color de la línea vertical de la cruz
            color: 'rgba(32, 38, 46, 0.1)',
            // Oculta la etiqueta de la línea vertical de la cruz
            labelVisible: false,
        }
    },
});

var series = chart.addAreaSeries({
	topColor: 'rgba(34,34,34, 0.2)',
  bottomColor: 'rgba(34,34,34, 0.0)',
	lineColor: 'rgba(34,34,34, 1)',
	lineWidth: 3
});


series.setData([
	{ time: "2018-03-28", value: 154 },
	{ time: "2018-03-29", value: 154.2 },
	{ time: "2018-03-30", value: 155.60001 },
	{ time: "2018-04-02", value: 156.25 },
	{ time: "2018-04-03", value: 156.25 },
	{ time: "2018-04-04", value: 156.05 },
	{ time: "2018-04-05", value: 158.05 },
	{ time: "2018-04-06", value: 157.3 },
	{ time: "2018-04-09", value: 144 },
	{ time: "2018-04-10", value: 144.8 },
	{ time: "2018-04-11", value: 143.5 },
	{ time: "2018-04-12", value: 147.05 },
	{ time: "2018-04-13", value: 144.85001 },
	{ time: "2018-04-16", value: 145.39999 },
	{ time: "2018-04-17", value: 147.3 },
	{ time: "2018-04-18", value: 153.55 },
	{ time: "2018-04-19", value: 150.95 },
	{ time: "2018-04-20", value: 149.39999 },
	{ time: "2018-04-23", value: 148.5 },
	{ time: "2018-04-24", value: 146.60001 },
	{ time: "2018-04-25", value: 144.45 },
	{ time: "2018-04-26", value: 145.60001 },
	{ time: "2018-04-27", value: 144.3 },
	{ time: "2018-04-30", value: 144 },
	{ time: "2018-05-02", value: 147.3 },
	{ time: "2018-05-03", value: 144.2 },
	{ time: "2018-05-04", value: 141.64999 },
	{ time: "2018-05-07", value: 141.89999 },
	{ time: "2018-05-08", value: 140.39999 },
	{ time: "2018-05-10", value: 139.8 },
	{ time: "2018-05-11", value: 137.5 },
	{ time: "2018-05-14", value: 136.14999 },
	{ time: "2018-05-15", value: 138 },
	{ time: "2018-05-16", value: 137.95 },
	{ time: "2018-05-17", value: 137.95 },
	{ time: "2018-05-18", value: 136.75 },
	{ time: "2018-05-21", value: 136.2 },
	{ time: "2018-05-22", value: 135 },
	{ time: "2018-05-23", value: 132.55 },
	{ time: "2018-05-24", value: 132.7 },
	{ time: "2018-05-25", value: 132.2 },
	{ time: "2018-05-28", value: 131.55 },
	{ time: "2018-05-29", value: 131.85001 },
	{ time: "2018-05-30", value: 139.85001 },
	{ time: "2018-05-31", value: 140.8 },
	{ time: "2018-06-01", value: 139.64999 },
	{ time: "2018-06-04", value: 137.10001 },
	{ time: "2018-06-05", value: 139.25 },
	{ time: "2018-06-06", value: 141.3 },
	{ time: "2018-06-07", value: 145 },
	{ time: "2018-06-08", value: 143.89999 },
	{ time: "2018-06-11", value: 142.7 },
	{ time: "2018-06-13", value: 144.05 },
	{ time: "2018-06-14", value: 143.55 },
	{ time: "2018-06-15", value: 140.5 },
	{ time: "2018-06-18", value: 139.64999 },
	{ time: "2018-06-19", value: 138 },
	{ time: "2018-06-20", value: 141 },
	{ time: "2018-06-21", value: 140.55 },
	{ time: "2018-06-22", value: 140.55 },
	{ time: "2018-06-25", value: 140.75 },
	{ time: "2018-06-26", value: 140.64999 },
	{ time: "2018-06-27", value: 141.14999 },
	{ time: "2018-06-28", value: 139.8 },
	{ time: "2018-06-29", value: 139.8 },
	{ time: "2018-07-02", value: 140.14999 },
	{ time: "2018-07-03", value: 143.05 },
	{ time: "2018-07-04", value: 140 },
	{ time: "2018-07-05", value: 129.2 },
	{ time: "2018-07-06", value: 129.55 },
	{ time: "2018-07-09", value: 128.3 },
	{ time: "2018-07-10", value: 126.55 },
	{ time: "2018-07-11", value: 124.3 },
	{ time: "2018-07-12", value: 124.8 },
	{ time: "2018-07-13", value: 123.25 },
	{ time: "2018-07-16", value: 123 },
	{ time: "2018-07-17", value: 124.25 },
	{ time: "2018-07-18", value: 123 },
	{ time: "2018-07-19", value: 121 },
	{ time: "2018-07-20", value: 121.45 },
	{ time: "2018-07-23", value: 123.8 },
	{ time: "2018-07-24", value: 122.15 },
	{ time: "2018-07-25", value: 121.3 },
	{ time: "2018-07-26", value: 122.7 },
	{ time: "2018-07-27", value: 122.2 },
	{ time: "2018-07-30", value: 121.7 },
	{ time: "2018-07-31", value: 122.95 },
	{ time: "2018-08-01", value: 121 },
	{ time: "2018-08-02", value: 116 },
	{ time: "2018-08-03", value: 118.1 },
	{ time: "2018-08-06", value: 114.3 },
	{ time: "2018-08-07", value: 114.25 },
	{ time: "2018-08-08", value: 111.85 },
	{ time: "2018-08-09", value: 109.7 },
	{ time: "2018-08-10", value: 105 },
	{ time: "2018-08-13", value: 105.75 },
	{ time: "2018-08-14", value: 107.25 },
	{ time: "2018-08-15", value: 107.4 },
	{ time: "2018-08-16", value: 110.5 },
	{ time: "2018-08-17", value: 109 },
	{ time: "2018-08-20", value: 108.95 },
	{ time: "2018-08-21", value: 108.35 },
	{ time: "2018-08-22", value: 108.6 },
	{ time: "2018-08-23", value: 105.65 },
	{ time: "2018-08-24", value: 104.45 },
	{ time: "2018-08-27", value: 106.2 },
	{ time: "2018-08-28", value: 106.55 },
	{ time: "2018-08-29", value: 111.8 },
	{ time: "2018-08-30", value: 115.5 },
	{ time: "2018-08-31", value: 115.5 },
	{ time: "2018-09-03", value: 114.55 },
	{ time: "2018-09-04", value: 112.75 },
	{ time: "2018-09-05", value: 111.5 },
	{ time: "2018-09-06", value: 108.1 },
	{ time: "2018-09-07", value: 108.55 },
	{ time: "2018-09-10", value: 106.5 },
	{ time: "2018-09-11", value: 105.1 },
	{ time: "2018-09-12", value: 107.2 },
	{ time: "2018-09-13", value: 107.1 },
	{ time: "2018-09-14", value: 105.75 },
	{ time: "2018-09-17", value: 106.05 },
	{ time: "2018-09-18", value: 109.15 },
	{ time: "2018-09-19", value: 111.4 },
	{ time: "2018-09-20", value: 111 },
	{ time: "2018-09-21", value: 111 },
	{ time: "2018-09-24", value: 108.95 },
	{ time: "2018-09-25", value: 106.65 },
	{ time: "2018-09-26", value: 106.7 },
	{ time: "2018-09-27", value: 107.05 },
	{ time: "2018-09-28", value: 106.55 },
	{ time: "2018-10-01", value: 106.2 },
	{ time: "2018-10-02", value: 106.4 },
	{ time: "2018-10-03", value: 107.1 },
	{ time: "2018-10-04", value: 106.4 },
	{ time: "2018-10-05", value: 104.65 },
	{ time: "2018-10-08", value: 102.65 },
	{ time: "2018-10-09", value: 102.1 },
	{ time: "2018-10-10", value: 102.15 },
	{ time: "2018-10-11", value: 100.9 },
	{ time: "2018-10-12", value: 102 },
	{ time: "2018-10-15", value: 100.15 },
	{ time: "2018-10-16", value: 99 },
	{ time: "2018-10-17", value: 98 },
	{ time: "2018-10-18", value: 96 }
]);


var series2 = chart.addAreaSeries({
	topColor: 'rgba(253,88,37,0.1)',
  bottomColor: 'rgba(253,88,37,0.0)',
	lineColor: 'rgba(253,88,37,0.4)',
	lineWidth: 3
});

series2.setData([
	{ time: "2018-03-28", value: 164 },
	{ time: "2018-03-29", value: 164.2 },
	{ time: "2018-03-30", value: 165.60001 },
	{ time: "2018-04-02", value: 166.25 },
	{ time: "2018-04-03", value: 166.25 },
	{ time: "2018-04-04", value: 166.05 },
	{ time: "2018-04-05", value: 168.05 },
	{ time: "2018-04-06", value: 167.3 },
	{ time: "2018-04-09", value: 164 },
	{ time: "2018-04-10", value: 164.8 },
	{ time: "2018-04-11", value: 163.5 },
	{ time: "2018-04-12", value: 167.05 },
	{ time: "2018-04-13", value: 164.85001 },
	{ time: "2018-04-16", value: 165.39999 },
	{ time: "2018-04-17", value: 167.3 },
	{ time: "2018-04-18", value: 163.55 },
	{ time: "2018-04-19", value: 160.95 },
	{ time: "2018-04-20", value: 169.39999 },
	{ time: "2018-04-23", value: 168.5 },
	{ time: "2018-04-24", value: 166.60001 },
	{ time: "2018-04-25", value: 164.45 },
	{ time: "2018-04-26", value: 165.60001 },
	{ time: "2018-04-27", value: 164.3 },
	{ time: "2018-04-30", value: 164 },
	{ time: "2018-05-02", value: 167.3 },
	{ time: "2018-05-03", value: 164.2 },
	{ time: "2018-05-04", value: 161.64999 },
	{ time: "2018-05-07", value: 161.89999 },
	{ time: "2018-05-08", value: 160.39999 },
	{ time: "2018-05-10", value: 169.8 },
	{ time: "2018-05-11", value: 167.5 },
	{ time: "2018-05-14", value: 166.14999 },
	{ time: "2018-05-15", value: 168 },
	{ time: "2018-05-16", value: 167.95 },
	{ time: "2018-05-17", value: 167.95 },
	{ time: "2018-05-18", value: 166.75 },
	{ time: "2018-05-21", value: 150}
]);

//ancho de la herramienta de información
const toolTipWidth = 130;

// Create and style the tooltip html element
const toolTip = document.createElement('div');
// Establece el ancho, la altura, la posición, el relleno, el tamaño de la caja, el tamaño de la fuente, el alineamiento del texto, el índice z, la parte superior, la izquierda, los eventos del puntero, el radio de borde y el sombreado de la herramienta de información
toolTip.style = 
`width: ${toolTipWidth}px;
height: 300px;
position: absolute;
display: none;
padding: 1px;
box-sizing: border-box; 
font-size: 12px; 
text-align: left; 
z-index: 1000; 
top: 15px; 
left: 1px; 
pointer-events: none; 
border-radius: 4px 4px 0px 0px; 
border-bottom: none; 
box-shadow: 0 2px 5px 0 rgba(117, 134, 150);
font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; 
-webkit-font-smoothing: antialiased; 
-moz-osx-font-smoothing: grayscale;
font-weight: bold;`; // Agrega esta línea

// Establece el fondo, el color y el borde de la herramienta de información
toolTip.style.background = `rgba(${'255, 255, 255'}, 0.25)`;
// Establece el color y el borde de la herramienta de información 
toolTip.style.color = 'rgba(34,34,34,0.1)';
// Establece el borde de la herramienta de información
toolTip.style.borderColor = 'rgba(0, 120, 255, 5)';
// Agrega la herramienta de información al cuerpo del documento
container.appendChild(toolTip);

// update tooltip
chart.subscribeCrosshairMove(param => {
    if (
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.x > container.clientWidth ||
        param.point.y < 0 ||
        param.point.y > container.clientHeight
    ) {
        toolTip.style.display = 'none';
    } else {
        const dateStr = param.time;
        toolTip.style.display = 'block';
        const data1 = param.seriesData.get(series);
        const data2 = param.seriesData.get(series2);
        const price1 = data1.value !== undefined ? data1.value : data1.close;
        let toolTipHTML = `<div style="color: ${'rgba(34,34,34)'};display:inline-block;">⬤ USD: ${Math.round(100 * price1) / 100}</div>`;
        if (data2 !== undefined) {
            const price2 = data2.value !== undefined ? data2.value : data2.close;
            toolTipHTML += `<div style="color: ${'rgba(253,88,37)'}">⬤ BTC: ${Math.round(100 * price2) / 100}</div>`;
        }
        toolTipHTML += `<div style="color: ${'rgba(34,34,34)'}">${dateStr}</div>`;
        toolTip.innerHTML = toolTipHTML;

        // Ajustar la posición del tooltip para que no sobrepase los bordes del gráfico
        let left = Math.min(Math.max(param.point.x, 0), container.clientWidth - toolTip.offsetWidth);
        let top = Math.min(Math.max(param.point.y, 0), container.clientHeight - toolTip.offsetHeight);

        toolTip.style.left = left + 'px';
        toolTip.style.top = top + 'px';
    }
});