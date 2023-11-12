// Custom component for carrot throwing interaction
AFRAME.registerComponent('carrot-thrower', {
  init: function () {
    var el = this.el;

    el.addEventListener('click', function () {
      // Emit an event to notify the snowman that a carrot has been thrown.
      var snowman = document.querySelector('#hangrySnowman');
      snowman.emit('carrot-thrown');
      
      // Remove the carrot from the scene.
      el.parentNode.removeChild(el);
    });
  },
});

// Custom component to manage snowman's response to carrots
AFRAME.registerComponent('a-snowman-carrots', {
  init: function () {
    var el = this.el;
    var carrotCount = 0;

    el.addEventListener('carrot-thrown', function () {
      carrotCount++;
      // Check if three carrots have been thrown, and if so, transform the snowman.
      if (carrotCount >= 3) {
        // Hide the hangry snowman and show the happy snowman.
        var hangrySnowman = document.querySelector('#hangrySnowman');
        var happySnowman = document.querySelector('#happySnowman');
        hangrySnowman.setAttribute('visible', false);
        happySnowman.setAttribute('visible', true);
      }
    });
  },
});
