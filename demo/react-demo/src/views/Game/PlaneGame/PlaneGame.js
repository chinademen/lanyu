import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { datas, explosionCells, planCells } from './js/data';
import { Loading } from './js/loading';
import {
    Sprite,
    SpriteSheetPainter,
    controllSpriteSheetPainter,
    planBehavior,
    starBehavior,
    starPainter,
    foodBehavior,
    foodPainter,
    missleBehavior,
    misslePainter,
    badPlanBehavior,
    badPlanPainter,
    planSize
} from './js/allSprite';
import './PlaneGame.less';

// 初始化参数
var myplan = null;  // 飞机

class PlaneGame extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sprites: [],       // 所有精灵类
            missles: [],       // 导弹精灵
            booms: [],         // 爆炸精灵
            foods: [],         // 食物精灵
            badPlanNum: 30,    // 敌方飞机数量    
            point: 0,          // 硬币
            foodDate: null,    // 食物时间
            dieNum: 0          // 死亡数
        };
        // 初始化canvas
        this.initCanvas = this.initCanvas.bind(this);
    }

    componentDidMount() {
        this.initCanvas()
    }

    componentWillUnmount() {
        // 组件销毁, 移除键盘绑定事件
        window.onkeydown = function(event) { }
        window.onkeyup = function(event) { }
    }

    // 初始化 canvas
    initCanvas() {
        var canvas = document.getElementById("cas");
        canvas.height = window.innerHeight - 250;
        var ctx = canvas.getContext('2d');
        var img = new Image(),
        boomDom = document.getElementById("booms"),
        missleDom = document.getElementById("missle"),
        gS = document.getElementById("gameStart"),      // 游戏开始信息
        gss = document.getElementById("gs-start");      // 游戏开始button

        let { sprites, missles, booms, foods, 
            badPlanNum, point, foodDate, dieNum,
        } = this.state;

        Array.prototype.foreach = function(callback) {
            for (var i = 0; i < this.length; i++) {
              callback.apply(this[i], [i]);
            }
        }

        // 动画
        var RAF = (function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        })();

        // 随机掉落物品的列表
        var godTimeout;
        var foodMaps = {
            LevelUP: {
                weight: 30,
                effect() {
                    myplan.fireLevel = myplan.fireLevel >= 4 ? myplan.fireLevel : myplan.fireLevel + 1;
                }
            },
            SpeedUP: {
                weight: 30,
                effect() {
                    myplan.firePerFrame = myplan.firePerFrame <= 10 ? 10 : myplan.firePerFrame - 10;
                }
            },
            God: {
                weight: 30,
                effect() {
                    clearTimeout(godTimeout);
                    myplan.god = true;
                    godTimeout = setTimeout(function() {
                        myplan.god = false
                    }, 15000);
                }
            },
            Boom: {
                weight: 30,
                effect() {
                    sprites.foreach(function() {
                        var bp = this;
                        if (bp.name === "badPlan" && bp.visible) {
                            bp.visible = false;
                            point += bp.badKind;
                            boom(bp);
                        }
                    });
                }
            }
        };

        // 计算每种食物命中的概率
        var foodAllWeight = 0;
        var currentProb = 0;
        Object.keys(foodMaps).forEach(key => foodAllWeight += foodMaps[key].weight);
        Object.keys(foodMaps).forEach(key => {
            var probility = foodMaps[key].weight / foodAllWeight;
            foodMaps[key].start = currentProb;
            foodMaps[key].end = currentProb + probility;
            currentProb = foodMaps[key].end;
        });

        window.onkeydown = (event) => {
            this.keyHandle(event, true);
        }

        window.onkeyup = (event) => {
            this.keyHandle(event, false);
        }

        function boom(plan) {
            for (var j = 0; j < booms.length; j++) {
                if (!booms[j].visible) {
                    booms[j].left = plan.left;
                    booms[j].top = plan.top;
                    booms[j].visible = true;

                    var audio = document.getElementsByTagName("audio");
                    for (var i = 0; i < audio.length; i++) {
                        if (audio[i].src.indexOf("boom") >= 0 && (audio[i].paused || audio[i].ended)) {
                            audio[i].play();
                            break;
                        }
                    }
                    break;
                }
            }
        }

        var stage = {
            init: function() {      // 初始化游戏界面
                var _this = this;
                this.loading = new Loading(datas, canvas, function() {
                    gS.style.display = "block";     // 展示游戏开始信息
                    canvas.className = "showBg";     
                    gss.addEventListener("click", function() {  // 游戏开始按钮绑定点击事件
                        gS.style.display = "none";  // 隐藏游戏开始信息
                        _this.addElement();
                    }, false)
                });
            },

            addElement: function() {    // 创建精灵函数
                for (var i = 0; i < 50; i++) {  // 
                    var x = Math.random() * canvas.width;
                    var y = Math.random() * 2 * canvas.height - canvas.height;
                    var star = new Sprite("star", starPainter, starBehavior, {ctx: ctx, canvas: canvas, missles: missles, point: point});
                    star.top = y;
                    star.left = x;
                    sprites.push(star);
                }

                for (var i = 0; i < badPlanNum; i++) {  // 生成敌方飞机精灵
                    var x = Math.random() * (canvas.width - 2 * planSize().w) + planSize().w;
                    var y = Math.random() * canvas.height - canvas.height;
                    var badPlan = new Sprite("badPlan", badPlanPainter, badPlanBehavior, {ctx: ctx, canvas: canvas, point: point});
                    // 飞机的随机位置
                    badPlan.top = y;
                    badPlan.left = x;
                    sprites.push(badPlan);
                }

                for (var i = 0; i < 400; i++) {         // 生成导弹精灵
                    var missle = new Sprite("missle", misslePainter, missleBehavior, {ctx: ctx, canvas: canvas, missles: missles});
                    missle.visible = false;
                    missles.push(missle);
                }

                for (var i = 0; i < badPlanNum; i++) {  // 生成飞机爆炸精灵
                    var img = new Image();
                    img.src = datas[0];
                    var boom = new Sprite("boom", new SpriteSheetPainter(explosionCells, false, function() {
                        this.visible = false;
                    }, img));
                    boom.visible = false;
                    booms.push(boom);
                }

                for (var i = 0; i < 5; i++) {          // 飞机食物精灵
                    var eatfood = new Sprite("food", foodPainter, foodBehavior, {ctx: ctx, canvas: canvas});
                    eatfood.left = Math.random() * canvas.width - 60 + 30;
                    eatfood.top = -30;
                    eatfood.visible = false;
                    sprites.push(eatfood);
                    foods.push(eatfood);
                }

                img.src = datas[2];      // 生成本方战机精灵
                myplan = new Sprite("plan", new controllSpriteSheetPainter(planCells, img), planBehavior, {ctx: ctx, canvas: canvas, missles: missles, point: point});
                myplan.left = canvas.width / 2;
                myplan.top = canvas.height - (planSize().h / 2 + 10);
                sprites.push(myplan);
            },

            myplanReborn: function(myplan) {
                setTimeout(function() {
                    myplan.visible = true;
                    myplan.left = canvas.width / 2;
                    myplan.top = canvas.height - (planSize().h / 2 + 10);
                    myplan.fireLevel = 1;
                    myplan.rotateAngle = 0;
                    myplan.god = true;
                    setTimeout(function() {
                        myplan.god = false;
                    }, 5000)
                }, 1000)
            },

            update: function() {
                var stage = this;
                var boomnum = 0,
                misslenum = 0;

                this.loading.loop();
                if (this.loading.getComplete()) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
                
                missles.foreach(function() {
                    var missle = this;
                    sprites.foreach(function() {
                        var bp = this;
                        if (bp.name === "badPlan" && bp.visible && missle.visible) {
                            var juli = Math.sqrt(Math.pow(missle.left - bp.left, 2) + Math.pow(missle.top - bp.top, 2));
                            if (juli < (planSize().w / 2 + missle.width / 2) && missle.isgood) {
                                missle.visible = false;
                                bp.blood -= 50;
                                if (bp.blood <= 0) {
                                    bp.visible = false;
                                    point += bp.badKind;
                                    boom(bp)
                                }
                            }
                        }
                    });

                    if (missle.visible) {
                        if (!missle.isgood && myplan.visible && !myplan.god) {
                            var juli = Math.sqrt(Math.pow(missle.left - myplan.left, 2) + Math.pow(missle.top - myplan.top, 2));
                            if (juli < (planSize().w / 2 + 3)) {
                                myplan.visible = false;
                                dieNum++;
                                missle.visible = false;
                                boom(myplan)
                                stage.myplanReborn(myplan)
                            }
                        }
                        misslenum++;
                        this.paint(ctx);    // 导弹绘制
                    }
                });

                booms.foreach(function() {
                    if (this.visible) {
                        boomnum++;
                        this.paint(ctx);    // 爆炸绘制
                    }
                })

                sprites.foreach(function() {
                    if (this.name === "food" && this.visible) {
                        var tjuli = Math.sqrt(Math.pow(this.left - myplan.left, 2) + Math.pow(this.top - myplan.top, 2));
                        if (tjuli < (myplan.width / 2 + this.width / 2)) {
                            this.visible = false;
                            foodMaps[this.kind].effect();
                        }
                    }

                    if (this.name === "badPlan" && myplan.visible && !myplan.god) {
                        var juli = Math.sqrt(Math.pow(this.left - myplan.left, 2) + Math.pow(this.top - myplan.top, 2));
                        if (juli < planSize().w) {
                            myplan.visible = false;
                            dieNum++;
                            this.visible = false;
                            boom(this)
                            boom(myplan)
                            stage.myplanReborn(myplan);
                        }
                    }
                    this.paint(ctx);    // 精灵绘制
                });
                if (myplan) {
                    ctx.fillStyle = "#FFF"
                    ctx.font = "18px 微软雅黑";
                    ctx.textAlign = "left";
                    ctx.textBaseline = "middle";
                    ctx.fillText("Level:" + (myplan.fireLevel === 4 ? "Max" : myplan.fireLevel) + "        Speed:" + ((80 - myplan.firePerFrame) === 70 ? "Max" : (80 - myplan.firePerFrame)), 0, canvas.height - 18);
                    ctx.fillText("Points:" + point + "     死亡次数:" + dieNum, 0, 18);
                    ctx.textAlign = "right";
                    ctx.fillText("Tips:按方向键:移动 ，按“Z”“C”键旋转飞机", canvas.width - 10, 18);

                    if (foodDate === null) {
                        foodDate = new Date();
                    } else {
                        var nowFoodDate = new Date();
                        if (nowFoodDate - foodDate > 4000) {
                            // 随机抛出食物
                            var createFood = Math.random() < 0.5 ? true : false;
                            var eatfood = foods.find(f => !f.visible);
                            if (createFood && eatfood) {
                                eatfood.left = Math.random() * canvas.width - 60 + 30;
                                eatfood.top = -30;
                                eatfood.visible = true;

                                var random = Math.random();
                                var foodList = Object.keys(foodMaps);
                                for (var i = 0; i < foodList.length; i++) {
                                    var food = foodMaps[foodList[i]];
                                    if (random >= food.start && random <= food.end) {
                                        eatfood.kind = foodList[i];
                                    }
                                }
                            }

                            foodDate = nowFoodDate;
                        }
                    }
                }

                boomDom.innerHTML = "爆炸使用率(已使用/存储总量):" + boomnum + "/" + booms.length;
                missleDom.innerHTML = "子弹使用率(已使用/存储总量):" + misslenum + "/" + missles.length;
            },
            // loading动画 
            loop: function() {
                var _this = this;
                this.update();
                RAF(function() {
                    _this.loop();
                });
            },
            // 初始化
            start: function() {
                this.init();    
                this.loop();
            }
        }
        // 运行
        stage.start();
    }

    
    // 飞机移动函数
    keyHandle(e, result) {
        if (myplan) {
            switch (e.keyCode) {
                //case 88:myplan.fire = result;
                //break;
                case 90:
                myplan.rotateLeft = result;
                break;
                case 67:
                myplan.rotateRight = result;
                break;
                case 37:
                myplan.toLeft = result;
                break;
                case 38:
                myplan.toTop = result;
                break;
                case 39:
                myplan.toRight = result;
                break;
                case 40:
                myplan.toBottom = result;
                break;
            }
        }
    }


    // 作弊器
    handleStart = () => {
        this.changeLevel(1, 50);
    }

    handleGod = () => {
        this.changeLevel(4, 10);
    }

    handleVeryGod = () => {
        this.changeLevel(10, 10);
    }
    
    handlePretyGod = () => {
        this.changeLevel(40, 50);
    }

    handleNoGod = () => {
        this.changeLevel(40, 5);
    }

    changeLevel = (fireLevel = 1, firePerFrame = 50) => {
        if (myplan) {
            myplan.god = true;
            myplan.fireLevel = fireLevel;
            myplan.firePerFrame = firePerFrame;
        }
    }
    // 作弊器 end

    

    render() {
        return (
            <div className="game">

                <div id="gameStart">
                    <Button id="gs-start" type="primary">游戏开始</Button><br/><br/>
                    <span>游戏说明：方向键移动，按“Z”“C”键旋转飞机</span>
                </div>

                <div className="movebg"></div>  

                <canvas id='cas' width="700" height="750">您的浏览器不支持canvas，请更新浏览器</canvas>
                
                <Button id="startgod" className="btn" type="primary" onClick={() => this.handleStart()}>初始属性</Button>
                <Button id="god" className="btn" type="primary" onClick={() => this.handleGod()}>最高属性</Button>
                <Button id="verygod" className="btn" type="primary"  onClick={() => this.handleVeryGod()}>超神属性</Button>
                <Button id="pretygod" className="btn" type="primary" onClick={() => this.handlePretyGod()}>全范围</Button>
                <Button id="nogod" className="btn" type="primary" onClick={() => this.handleNoGod()}>OMG！！！！</Button>

                <div className="showSomething">
                    <div id="booms">爆炸使用情况(已使用/缓存量)：</div>
                    <div id="missle">子弹使用情况(已使用/缓存量)：</div>
                </div>

            </div>
        );
    }
}

export default PlaneGame;