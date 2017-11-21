'Use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(310, 10);
  ctx.quadraticCurveTo(40, -10, 100, 145);
  ctx.quadraticCurveTo(40, 290, 310, 280);
  ctx.quadraticCurveTo(590, 290, 520, 145);
  ctx.quadraticCurveTo(590,-10,310,10);
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowColor = 'rgba(0, 0, 0, 0)'
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 180, 40);
  ctx.fillText('Список результатов:', 180, 64);

  var max = -1;
  var maxIndex = -1;

  for(var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  // ctx.fillText('Худшее время: ' + Math.floor(max) + 'мс у игрока ' + names[maxIndex], 180, 88);
  var barWidth = 40;
  var indent = 50;
  var initialX = 160;
  var initialY = 255;
  var lineHeight = 15;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы'){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(initialX + (indent + barWidth) * i, initialY, barWidth, -times[i] * step);

    } else {
      ctx.fillStyle = 'rgba(51, 153, 255, ' + Math.random() + ')';
      ctx.fillRect(initialX + (indent + barWidth) * i, initialY, barWidth, -times[i] * step);
    }
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(Math.floor(times[i]), initialX + (indent + barWidth) * i, initialY - lineHeight + -times[i] * step);
    ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY + lineHeight);
  }
  // ctx.fillRect(180, 260, 40, -times[0] * step);
  // ctx.fillRect(270, 260, 40, -times[1] * step);
  // ctx.fillRect(360, 260, 40, -times[2] * step);
};
