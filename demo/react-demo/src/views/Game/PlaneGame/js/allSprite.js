// 飞机尺寸
export let planWidth = 24;
export let planHeight = 24;
// 导弹尺寸
export let missleWidth = 70;
export let missleHeight = 70;
// 爆炸
export let boomWidth = 60;

//精灵总类   name精灵名称   painter精灵绘制器   behaviors精灵行为   args参数
export const Sprite = function(name, painter, behaviors, args) {
  if (name !== undefined) this.name = name;
  if (painter !== undefined) this.painter = painter;
  // 初始位置
  this.top = 0;
  this.left = 0;
  this.width = 0;
  this.height = 0;
  this.velocityX = 3;
  this.velocityY = 2;
  this.visible = true;
  this.animating = false;
  this.behaviors = behaviors;
  this.rotateAngle = 0;
  this.blood = 50;
  this.fullBlood = 50;

  if (name === 'plan') {
    this.rotateSpeed = 0.06;
    this.rotateLeft = false;
    this.rotateRight = false;
    this.fire = true;
    this.isgood = true;
    this.firePerFrame = 40;
    this.fireLevel = 1;
    this.velocityY = 3;
    this.god = false;
  } else if (name === 'star') {
    this.width = Math.random() * 2;
    this.speed = 1 * this.width / 2;
    this.lightLength = 5;
    this.cacheCanvas = document.createElement('canvas');
    this.cacheCtx = this.cacheCanvas.getContext('2d');
    this.cacheCanvas.width = this.width + this.lightLength * 2;
    this.cacheCanvas.height = this.width + this.lightLength * 2;
    this.painter.cache(this);
  } else if (name === 'badPlan') {  // 敌方飞机
    this.isgood = false;
    this.badKind = 1;
    this.speed = 2;
    this.rotateAngle = Math.PI;
    this.py = Math.PI / 2;
    this.xangle = Math.random() > 0.5 ? -Math.random() * 0.03 : Math.random() * 0.03;
  } else if (name === 'missle') {   // 导弹
    this.width = missleWidth;
    this.isgood = true;
  } else if (name === 'boom') {     // 飞机爆炸
    this.width = boomWidth;
  } else if (name === 'food') {     // 飞机食物
    this.width = 40;
    this.speed = 3;
    this.kind = 'LevelUP';
  }
  this.toLeft = false;
  this.toTop = false;
  this.toRight = false;
  this.toBottom = false;

  this.outArcRadius = Math.sqrt(this.width / 2 * this.width / 2 * 2);

  if (args) {
    for (var arg in args) {
      this[arg] = args[arg];
    }
  }
};

Sprite.prototype = {
  constructor: Sprite,
  paint: function(ctx) {    // 绘画精灵
    if (this.name === 'badPlan') {
      this.update();
    }

    if (this.painter !== undefined && this.visible) {
      if (this.name !== 'badPlan') {
        this.update();
      }
      if (
        this.name === 'plan' ||
        this.name === 'missle' ||
        this.name === 'badPlan'
      ) {
        ctx.save();
        ctx.translate(this.left, this.top);
        ctx.rotate(this.rotateAngle);
        this.painter.paint(this, ctx);  // 绘制 飞机 导弹 敌方飞机
        ctx.restore();

        if (this.god) {
          ctx.beginPath();
          ctx.arc(
            this.left,
            this.top,
            (Math.random() * 0.2 + 1) * planWidth / 2,
            0,
            2 * Math.PI
          );
          ctx.strokeStyle = '#FFF';
          ctx.stroke();
        }
      } else {
        this.painter.paint(this, ctx);
      }
    }
  },
  update: function(time) {    // 精灵移动
    if (this.behaviors) {
      for (var i = 0; i < this.behaviors.length; i++) {
        this.behaviors[i].execute(this, time, this.canvas, this.missles);
      }
    }
  },
};

// 精灵表绘制器
export const SpriteSheetPainter = function(cells, isloop, endCallback, spritesheet) {
  this.cells = cells || [];
  this.cellIndex = 0;
  this.dateCount = null;
  this.isloop = isloop;
  this.endCallback = endCallback;
  this.spritesheet = spritesheet;
};

SpriteSheetPainter.prototype = {
  advance: function() {
    this.cellIndex = this.isloop
      ? this.cellIndex === this.cells.length - 1 ? 0 : this.cellIndex + 1
      : this.cellIndex + 1;
  },
  paint: function(sprite, ctx) {
    if (this.dateCount === null) {
      this.dateCount = new Date();
    } else {
      var newd = new Date();
      var tc = newd - this.dateCount;
      if (tc > 40) {
        this.advance();
        this.dateCount = newd;
      }
    }
    if (this.cellIndex < this.cells.length || this.isloop) {
      var cell = this.cells[this.cellIndex];
      ctx.drawImage(
        this.spritesheet,
        cell.x,
        cell.y,
        cell.w,
        cell.h,
        sprite.left - sprite.width / 2,
        sprite.top - sprite.width / 2,
        cell.w,
        cell.h
      );
    } else if (this.endCallback) {
      this.endCallback.call(sprite);
      this.cellIndex = 0;
    }
  },
};

//特制飞机精灵表绘制器
export const controllSpriteSheetPainter = function(cells, spritesheet) {
  this.cells = cells || [];
  this.cellIndex = 0;
  this.dateCount = null;
  this.isActive = false;
  this.derection = true;
  this.spritesheet = spritesheet;
};

controllSpriteSheetPainter.prototype = {
  advance: function() {
    if (this.isActive) {
      this.cellIndex++;
      if (this.cellIndex === this.cells.length) {
        this.cellIndex = 0;
        this.isActive = false;
      }
    }
  },
  paint: function(sprite, ctx) {
    if (this.dateCount === null) {
      this.dateCount = new Date();
    } else {
      var newd = new Date();
      var tc = newd - this.dateCount;
      if (tc > sprite.firePerFrame) {
        this.advance();
        this.dateCount = newd;
      }
    }
    var cell = this.cells[this.cellIndex];
    ctx.drawImage(
      this.spritesheet,
      cell.x,
      cell.y,
      cell.w,
      cell.h,
      -planWidth / 2,
      -planHeight / 2,
      cell.w,
      cell.h
    );
  },
};

// 飞机精灵行为
export const planBehavior = [
  {
    execute: function(sprite, time, canvas, missles) {
      if (sprite.toTop) {
        sprite.top =
          sprite.top < planHeight / 2
            ? sprite.top
            : sprite.top - sprite.velocityY;
      }
      if (sprite.toLeft) {
        sprite.left =
          sprite.left < planWidth / 2
            ? sprite.left
            : sprite.left - sprite.velocityX;
      }
      if (sprite.toRight) {
        sprite.left =
          sprite.left > canvas.width - planWidth / 2
            ? sprite.left
            : sprite.left + sprite.velocityX;
      }
      if (sprite.toBottom) {
        sprite.top =
          sprite.top > canvas.height - planHeight / 2
            ? sprite.top
            : sprite.top + sprite.velocityY;
      }
      if (sprite.rotateLeft) {
        sprite.rotateAngle -= sprite.rotateSpeed;
      }
      if (sprite.rotateRight) {
        sprite.rotateAngle += sprite.rotateSpeed;
      }
      if (sprite.fire && !sprite.painter.isActive) {
        sprite.painter.isActive = true;
        this.shot(sprite, missles);
      }
    },
    shot: function(sprite, missles) {
      this.addMissle(sprite, sprite.rotateAngle, missles);  // 正常增加绘制导弹
      var missleAngle = 0.1;
      for (var i = 1; i < sprite.fireLevel; i++) {          // 作弊器导弹绘制
        this.addMissle(sprite, sprite.rotateAngle - i * missleAngle, missles);
        this.addMissle(sprite, sprite.rotateAngle + i * missleAngle, missles);
      }
    },
    addMissle: function(sprite, angle, missles) { // 添加导弹
      if (!missles) return;
      for (var j = 0; j < missles.length; j++) {
        if (!missles[j].visible) {
          missles[j].isgood = true;
          missles[j].left = sprite.left;
          missles[j].top = sprite.top;
          missles[j].rotateAngle = angle;
          var missleSpeed = 20;
          missles[j].velocityX =
            missleSpeed * Math.sin(-missles[j].rotateAngle);
          missles[j].velocityY =
            missleSpeed * Math.cos(-missles[j].rotateAngle);
          missles[j].visible = true;
          break;
        }
      }
    },
  },
];

// 飞机开始行为
export const starBehavior = [
  {
    execute: function(sprite, time, canvas) {
      if (sprite.top > canvas.height) {
        sprite.left = Math.random() * canvas.width;
        sprite.top = Math.random() * canvas.height - canvas.height;
      }
      sprite.top += sprite.speed;
    },
  },
];

// 开始绘制
export const starPainter = {
  paint: function(sprite, ctx) {
    ctx.drawImage(
      sprite.cacheCanvas,
      sprite.left - sprite.width / 2 - sprite.lightLength,
      sprite.top - sprite.width / 2 - sprite.lightLength
    );
  },

  cache: function(sprite) {
    sprite.cacheCtx.save();
    var opacity = 0.5,
      addopa = 0.8 / sprite.lightLength;
    for (var i = 1; i <= sprite.lightLength; i += 2) {
      opacity -= addopa;
      sprite.cacheCtx.fillStyle = 'rgba(52,181,246,' + opacity + ')';
      sprite.cacheCtx.beginPath();
      sprite.cacheCtx.arc(
        sprite.width / 2 + sprite.lightLength,
        sprite.width / 2 + sprite.lightLength,
        sprite.width / 2 + i,
        0,
        2 * Math.PI
      );
      sprite.cacheCtx.fill();
    }
    sprite.cacheCtx.fillStyle = 'rgba(255,255,255,0.8)';
    sprite.cacheCtx.beginPath();
    sprite.cacheCtx.arc(
      sprite.width / 2 + sprite.lightLength,
      sprite.width / 2 + sprite.lightLength,
      sprite.width / 2,
      0,
      2 * Math.PI
    );
    sprite.cacheCtx.fill();
  },
};

// 食物精灵行为
export const foodBehavior = [
  {
    execute: function(sprite, time, canvas) {
      sprite.top += sprite.speed;
      if (sprite.top > canvas.height + sprite.width) {
        sprite.visible = false;
      }
    },
  },
];

// 食物精灵绘制
export const foodPainter = {
  paint: function(sprite, ctx) {
    ctx.fillStyle =
      'rgba(' +
      parseInt(Math.random() * 255) +
      ',' +
      parseInt(Math.random() * 255) +
      ',' +
      parseInt(Math.random() * 255) +
      ',1)';
      ctx.font = '15px 微软雅黑';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(sprite.kind, sprite.left, sprite.top);
  },
};

// 导弹精灵行为
export const missleBehavior = [
  {
    execute: function(sprite, time, canvas, missles) {
      sprite.left -= sprite.velocityX;
      sprite.top -= sprite.velocityY;
      if (
        sprite.left < -missleWidth / 2 ||
        sprite.top < -missleHeight / 2 ||
        sprite.left > canvas.width + missleWidth / 2 ||
        sprite.top > canvas.height + missleHeight / 2
      ) {
        sprite.visible = false;
      }
    },
  },
];

// 导弹精灵绘制
export const misslePainter = {
  paint: function(sprite, ctx) {
    if (sprite.isgood) {
      var img = new Image();
      img.src = 'http://localhost:9000/images/plane/plasma.png';
      ctx.drawImage(
        img,
        -missleWidth / 2 + 1,
        -missleHeight / 2 + 1,
        missleWidth,
        missleHeight
      );
    } else {
      ctx.beginPath();
      ctx.fillStyle = '#f00';
      ctx.arc(0, 0, 3, 0, 2 * Math.PI);
      ctx.fill();
    }
  },
};

// 敌方飞机精灵毁灭行为
export const badPlanBehavior = [
  {
    execute: function(sprite, time, canvas, missles) {
      if (sprite.top > canvas.height || !sprite.visible) {
        var random = Math.random();

        if (this.point >= 200 && this.point < 400) {
          sprite.fullBlood = 150;
          if (random < 0.1) {
            sprite.badKind = 2;
            sprite.fullBlood = 250;
          }
        } else if (this.point >= 400 && this.point < 600) {
          sprite.fullBlood = 250;
          if (random < 0.2) {
            sprite.badKind = 2;
            sprite.fullBlood = 400;
          }
          if (random < 0.1) {
            sprite.badKind = 3;
            sprite.fullBlood = 600;
          }
        } else if (this.point >= 600) {
          sprite.fullBlood = 500;
          if (random < 0.4) {
            sprite.badKind = 2;
            sprite.fullBlood = 700;
          }
          if (random < 0.2) {
            sprite.badKind = 3;
            sprite.fullBlood = 1000;
          }
        }
        sprite.visible = true;
        sprite.blood = sprite.fullBlood;
        sprite.left = canvas.width / 2;
        sprite.xangle =
          Math.random() > 0.5 ? -Math.random() * 0.03 : Math.random() * 0.03;
        sprite.top = Math.random() * canvas.height - canvas.height;
      }
      if (sprite.top > 0) {
        var num = sprite.badKind === 1 ? 0.002 : 0.01;
        var random = Math.random();
        if (random < num) {
          this.shot(sprite, missles);
        }
      }
      sprite.top += sprite.speed;
      sprite.left += 3 * Math.sin(sprite.py);
      sprite.py += sprite.xangle;
    },
    shot: function(sprite, missles) {
      this.addMissle(sprite, sprite.rotateAngle, missles);
    },
    addMissle: function(sprite, angle, missles) {
      if (!missles) return;
      for (var j = 0; j < missles.length; j++) {
        if (!missles[j].visible) {
          missles[j].isgood = false;
          missles[j].left = sprite.left;
          missles[j].top = sprite.top;
          missles[j].rotateAngle = angle;
          var missleSpeed = 5;
          missles[j].velocityX =
            missleSpeed * Math.sin(-missles[j].rotateAngle);
          missles[j].velocityY =
            missleSpeed * Math.cos(-missles[j].rotateAngle);
          missles[j].visible = true;
          break;
        }
      }
    },
  },
];

// 敌方飞机精灵绘制
export const badPlanPainter = {
  paint: function(sprite, ctx) {
    var img = new Image();
    img.src = 'http://localhost:9000/images/plane/ship.png';
    switch (sprite.badKind) {
      case 1:
      ctx.drawImage(
          img,
          96,
          0,
          planWidth,
          planWidth,
          -planWidth / 2,
          -planHeight / 2,
          planWidth,
          planWidth
        );
        break;

      case 2:
      ctx.drawImage(
          img,
          120,
          0,
          planWidth,
          planWidth,
          -planWidth / 2,
          -planHeight / 2,
          planWidth,
          planWidth
        );
        break;

      case 3:
      ctx.drawImage(
          img,
          144,
          0,
          planWidth,
          planWidth,
          -planWidth / 2,
          -planHeight / 2,
          planWidth,
          planWidth
        );
        break;
    }

    ctx.strokeStyle = '#FFF';
    ctx.fillStyle = '#F00';
    var bloodHeight = 1;
    ctx.strokeRect(
      -planWidth / 2 - 1,
      planHeight + bloodHeight + 3,
      planWidth + 2,
      bloodHeight + 2
    );
    ctx.fillRect(
      planWidth / 2 - planWidth * sprite.blood / sprite.fullBlood,
      planHeight + bloodHeight + 3,
      planWidth * sprite.blood / sprite.fullBlood,
      bloodHeight
    );
  },
};

// 敌方飞机精灵尺寸
export const planSize = function() {
  return {
    w: planWidth,
    h: planHeight,
  };
};


