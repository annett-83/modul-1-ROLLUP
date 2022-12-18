
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) {
      e.setAttribute(t[n], r.attributes[t[n]]);
    }
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body {\r\n    background: rgb(0, 0, 0);\r\n    color: white;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n .js-image {\r\n    width: 400px;\r\n    height: 200px;\r\n }";
n(css,{});

var JS_IMAGE = "data:image/png;base64,UklGRnobAABXRUJQVlA4IG4bAADQ9gCdASrgARUBPmEqkkakIiGhJrF8yIAMCWlu4XFuArdaqp/S/9x65foH9L/o/tg96+wZ7afz725fvH0RfJeHf1KawPyq+H/3085/5bxCP5L+Rf3j8z/7d9PsUTEz6h3t/7R+PtqTfz+oB/jv3D6IWgJ+b/9F9zPynf9/+g8j7/M/+j/I/An/Lf69/2/772ov209kz9mw22tCS+qShBTY+JqZmffTqdFmMEbVEtSLiB2zcOkqfJdR/P0EUQikxWI2G8botEEqzCa1SKGJm3X7KiVXsshq08uzdAc9Vgfrpd/C0yJ73gRmP/+9LJH/8z/pwIANeeNKq82/jWHMzHsL+3CuFyzCbRPWgLLMl21t5anR/G26eSXC5ZhNm2qfLPzszIuVvCz3Q+49BVKIF0BK84jaBFBGdQjr58Q1M2Ae0QWf3/sp/07qC0zTAcbvtrKhDli+KjD+NByi9h7TnLmMqZmCnnop/hcgbTcpKNh3IBP1Jo58fF2Nx1CT2vpT3Do14yW33NPTBAUaPHfMDBooeoYkPYB4kWAxBw0PmDCTCKY12bQE6t9EtBVxesXfbFnu7ChUpTotfMYA79L7Zm5bhH3MQpB7wM68Aj3Tyv+mnRjriJJe7Vm25mNJ3VZYyv4fAjRHJVQtSILWtiTtylIUHdV2wlbc8Dm/Y89D/u+/ihv2zHEXhA1IEY1gfZSPiLIXjMxWNhNbcSeiJcofaJmMHp9UQbUut5oOY/DdlE2J5jx/CNtPmiBUPZycAhqvGQJGNHKGzaEljRToMj3hJMUyS9OI+CALa81Ibf6cfbwmayl2ljIknBtwfrREtpSn9ZRgQPjP/+WiuK4O2DFOo6HsIABlbb/8wAE2TzJDPlNH2Y/Dej3HqiQZsiSsAdbVhY051cdx8BLspEz0gdnrRUrz5Za/34Kvr9G/04+2wIuicb9Xtpw1vCHm4/7Milx59nINbxiO8mWTYmyrZP6L3r947rhG0aeh5wJJPAQ2BC+TDKOh5xAvv5hGUpoNap+oM8QVBjD3SMrxy9D69poPlgjjbs61sxLThbOWMCGqFOHT/jNAKa6iJaCXyRiHKqNe49MlOkNQ5BaPgvQ18X68hWgSHEtficAxWTeSNfIa6E3167gN7TJRd/T9eocilF5TaKLqixusC+BSfBngvVjKgKxKP2sdL1RiTBVSGaez9eGAYticJXpy4utHuP9fZcezjm9wXfxd+eYJpmlLCfY4NFfGgaM9EQ2befFLQBa68oo+22Ga6FSe6ENxD0yf7M0O2kFClMcINjRR+EF4pIhNHXBfkGVDATJaIQrNIJhJTjBHqq5mfoaasvoMTOIoCMP1JVy+Lwe2AVmb+Yw96u7Fs0uS7eRnrIJTRz+sQ+SFp+E0l94JLgzyRGmoyDWiw5wzZWQyTLtcdlX6ZbcU7bEe1QQZ4R30y02bkm92KDozn+hGfuyIUuhwV9zrS6d/gVlfmhsaeFwiLVJBqb3DpYA1vSs0eHILsj3W1ZG486+Wwgzn3SOFGflGN03KO5HF4DijwMqYD/UT+1vgMQR5GKLR/anGI4evDCWnh3Y2swl0X9fCGRoCUoLDpRgON17IHdrapzKDzAG0XMaLPyX1Zv01s+jGy0GnLN++bmRsEacm5oC3vvbgwamMpGzdFkEfKR3etZpmlcjeZ6TYFIFAzue9NkjtV7nqIdA196yhfglBYU23wBVT4WKFos2ATfm9ZQ013TIkuGNZMTw3wrmlEY4F0dci//RvxR8Nq7yygmyWFzjIYpWKWiXmoZ8G5JpFcUOGkoGwInmJ9DEN6aNcU5D2KYz4zQ59TNQxLKQilazBVt2RNgaTWClCMRh/bu4w0A/frsqpHoDQ+CdgZRmHjSRRw3xvQ22g2O/SKjG+Qf9a0TCV3BzVDOXMjkAeKdPFYthTE2KctiPqDGTqfkl34YIcZs3MBxgXQnQSmipbr5KPPTYoW4sS8kuUDHLbMpRaamNYM1h52KGf4DUrK/WL6VItGSipcGjf57J3ArL22IZBofLQpa3fIOw7S6MmZqAdWGdTab94fpuTOaWB3DZ9M5apKrh7+CxBHF/YhWxVZOvH3Bzx69uanQ02Bn/E4/cFmzaOthd0qoFiz2BcI26WFCmvvnCSkBWBW2oJzOTMgsSKXCimYniGJm7g54du6giLI4omyAE7DOptN+8GUgZob5i3eAOgYuXda7BEO8Z/CpCxQ1miIsYQw3c4silmilpcdKNH1iVLXU4zIeD7br2eZVdm7uBGpIacD3Oa+v17FaIJjz6KPEU+v7BC/r2M7OFkh2LtrdVVulxhgNzKaDVFH+Nmzbsf66Vn89RpPAKY9dF8NUkHUOTegqe1uMZ3qphvcOyHRKeHn2Z6GLiUVkv1o6tHi+n6kJxiI6a63RWVAarO53IjNJX7CZukTp+8RW8EJEIAFOZGvVTffh9zQnt7dqf50Sy570x076d7FTDd7RjzDolCRd5pzBgh1qTFiWnO+TCdNm5NuLugJ77OYIofh0yrxURlNBBdc+8dpbCIyupyp4N9A5bdpo6ZSlWZxWMpPKMCEB80kK0SYce9V9tgA4CAC3SSUMrDqq73Yq9b/TxyO6gb7Q1e8Oc8L/lW/m1foFACFbVAwNY1rpsz+HG3YbtoitAA/vQW24at8f5tYORvPTy8R9Cs1Fvdyeq+iqyX5XFg/Bw0m6PAH8ONxgXZfzXDl80StmnM62PMzAiW+f0rtlbwP/ZC6tSUYYIG+UBrt+5y2B4cenN+i086+oxFF6i/L2i9Su4UTNJ+YfVnFzS63uHV/kRbOtjbD2Hxyz5DCI/NhVQ4TpCRQC2RXiIdCDUkhnMNd8KjBkyTgEmHEQTtusOys/MxI240t6IsHWtVNK7ncmNUNnhZn9AD6qjEcwi+uJtLPLxBNG2VGO4aPl7DmtJxjMgpPKIn49xuDrVo2Z/bcTAY/dSchPtyOLYQ8Emcbk86BEVKQWu6GuuYYZsJypB7VxGDONhbGGdOqoFbESbmVAtDhpT9LPMTIJuxca7RT/E4doh//1ebxcYjGUNYgsg4I4x47RIorXgOlAIm7aCfdLURVQouRkCmNVNn5/1alqZKWnBy+3u3NqVh+teA6UAiSHof2fkpz700IKGc/Jh/6Bxe5FG9tL4siQ1taNRe29yocodTNh1aPL9Y8YkhJvRuKqHSiL/XkovbLWZl7wDLhE0wRF1OmZmf7HkW9/n113gqQ+I1Dz0K9zYXqkLKT/2aFzPPDN0JV40HpgL+X/qT4yfI0xt6op/Yca1NLOmcAV4YypfSUUeqM+/u38wCKmFa8haONbKIXJuURT7Cd1YzQ3vLWkDVIAjBtgr6csMIPVUV64D051680UL+kka8yj8dx46NHaI2a823Om8OdYJ0ajgdj9Tl1gg/hr2ETWyUnruQQ5o36SbNI8UzHgpv1lTzaDTa3G5jwmGeZRyo+DdMTMZk9RvZVEsiYgNYaZpiNP1GS2wXu9675aGAeuon4zWyMeHohD0DYBnU3BkEd0TAX/bcCfab72+IrPrrmc4tHbjF2EW6NtRtgmifkNsrLk26LRHTekopwqpJdr0yzFdWbsBNsg3JsuLaUjSfOBkk0dAnsrlN2xbu35EDEL0mkvueqndxqoLmYx7/gK6on6vio//1lf+KuUnyTMPCuPUlj77y8AISf2gKLwmNfAQBavHQzAN24Oy0juxXWox5D6LXs47BxIswT7W166IEAxrt13dZZ6m8ZE36piVxjs9NbxnSI8KG6TS0ZkEWPv7QrTn2NXx1St3RzTC6e0ea4rXnKISfegLkyrwPDZMpSan9GqyhGhUfCRoj0/qM8pWMVYMUepu1asObW0AxSrf/NP6NVn/tDSwLtbVCNNl+vhi9XmxcwCkLByx8bT8TWEA7308prvEmx+LBxdHIqn/uWTlgDb+rpzkvBjOwiFCF6AfV3e86/1aZovsl9kbi424T5o++mNMwrUwklv0jX3hDtYckilpO5TYKkdxGDlaVH4tYzj5z7r7Id+63NQuQlvQNHjJKD50OfO9f04S/4hKdReqnqvAYe4PqqhTrVrzdOP1wMficjUpJChnONUaVJhrOOUhOAE9YfACr+jBOnGxwaVaBjXWQLq0OJS24pEnKkol8FvBdskgWthjBFe/TJIgHHeGaPEKYvJysD9p57qZhnd/12eVKoexvpWjquO0jL8e+5MzEEpJM8T8dD3BCE1WqVyVtGVkSi+jsuLaUcVl63tQiux/8T+1IngcQsgDyh7280kQBlFRZDZLvOPxGbPXKzbTULHkT8NWI0Jqp3zIjNC49SW8gQfbFchU6AnhIwg1/WEAGIQrkXkx8YFTryXB8cGSoo/t95D1regb09Lk6xY8ilUAuZIpv70fKG6JnGSupALEfyVHiLeizR6KX7ldJy/dvsjo3312Q791xyFhwA7snpS2xB35PNQrVEICxwm4jDDGguMM3y0jFetQOTRLsL5NpPIDJJo6IbdodFtUIwzMXX/g5f79ZtxuDSd7C/lFiLfcHLdwY8SD3mIgYeuGufwZnWDii0jD3SloXb/+Jb1aHbEqe+K9H6PaXbtmg7XndflGlvf6i4AF8gN4LQt0rURCyNgz6kH/MV/Mmp+yyODMD0nyTnu2ksum5exd60aDpLBrjPK43wXv5Z7cp8XEg9lAEMbxGC4GuWEOzQ2fEgNO+8iDvhKjP/ZblczUoUpb9VY60KN5EdgCMxFO7wkcHGDVHqcxn2/+uzypf1TBrA6XWgVSQ3Lbtnhx+p5I7EgYf3ffc5ij0SUOcyKEOum6+1f03ZCcdYWZgg51ZJNHRDbtDouGdTyJApy4w2pEacEEsfFlNsbE/1+5GLzcKJUijZ1la3tOZbw8OlO7sR7e9pJEzsuQGRAs6+LaNjnt2lpdf9yRlRywIAOrJ7kiWc2JdgDpF2Nmm7cmXpiJXgH7Q0NdDUOJ02ApvNH4jACFR640JVvYVYj/ymp3FWsoOVfliT1yUaq7cf7R9db6jtc+c/UrPnxdzDdUBwjUJ3v7x6XEM2eBzsxtSrSJVuORBVQYa5W7wJpPfC+A6G1l+f1l9cm4MvmGADUZ9P6pa2o6X1qnu3z/JyP/CuU5ryygAQE4rDZtDSRd8mMsXe8tjWsPZ7Gfpa7TS9XXRAcQK2gY68yAd3GSoAyEgq0r0QcKsmEBFGOBNOdlB5zzXyhSWijBlsQTCJ6eN7olyulZyLCjkimDIlIgZZsleyXN7Msr5fbfmWu0Grj3Y/TJIf4rLRBSpd/CZoMTma7GlSbDRk6FcjKB+upbIQxaoWJwuUHBk5f/uOKr7T3g4RW99hwUB+EM7/mTw4uYciYQAUiehb8rIDoBjXd0ekx0Ffiq+6x5mZriWfMy4Wm5JqdU/elTRm5MxjXv2eVdAaoLvDRcVJjV2aUf7H8fcQY9afVS/+XdArMCDa/KrKyqLe/iOhGUVLPghzfYeIXahbaU4eNHU9g2GrM8d2pYSJB5Z+8g8SQYHPMGuHCSM/iTmSrtXZ/xHk5AGRN1AOSl3YYgLTtlzZ9Le8+0lPNupulYVEDYkfUOOUuLFnnNb8ku3npolgYhVdJuvJAtZ7gvvZhfNBiczXY0jWV3tIcalHyvGFq11NCDkUbCRuT6ij0fKxirExsee1xy1v6si/grtitdIA0+gPim25YSNdJy/lvd08XmvY4V2Q79R82ZtUc0zYtIfFoUyfX2AIobxV8EBcbsSVgfvbqoLEFYmvxN/+qYxx5SbkOG7NdwVtzMOA+rFNbRc7Tc+qda/ZYq2CeBKK0WpvzqmMTC+kMGfPgtCNKzl7qwUD7GtIJpKwq/WNMuT5tK8+9h3ry/uUqi+/cRY/1VqHTPlgz4U7s9T7G/3w6yGgVsYayFP2pvNvJO/5N+pIbcpDb8QK1FAkAk5soZxrV+6vPJboLDf7LVj/qWQbVMvVU6Jer3oittmDI0Mpw5BHSr/N//npCQONO78890n6G7ZyaYfCC5fkhqUv3Kg+tZkMNlc2I9IaCgPRLyY94WdZ/fIgEExP2+RkRokDytC5wLVDqJMn941qaQAkYKv+iqNojRT23vtzL94xPwXpW5MAAeyrLViQpKppjzwA15tFzgKqCHcOcjRQm4mOkNk+EFw0E4WJxEsAiSJb7bfp6Ch9ekiMLFqlclbRJ/Jj0ergmO0PtRtf5QzJIeHEuM8XbVLH0wJzer3a7+AIeAHnhyth+Pky9YGJ6OzkmZMrEkMcYO1FrB5YaQUbK3WAp9oClPZyGbZmbCzlFLscRmRKbhysJPVML4lAOVGvbl6kHz9R0mQoP489QToKGuy82qX5cieI4CSfCY61xyU8bfWxilFy0SqelZbK1VC8QWPkSK9av5ovQo4EsNdS6Lu7aQyX9L1iGu2unVr2I/n5Pv6NyqPviL0vQIdOMd+Gjsbq/ITH/y6BkwVAq5lolJsNNrTgWvmhisFaK43pPr0fa0uXA127bBkjvSBEVVf4P439cw3dWdoqRukgQAHneTq7StD9XpbA5GEHYoq01gq8Om16XQDfHe9o2ZTtQV3X5m3HvtMU8NNdQJkYMOJqxsaBmG2ycB5TLApydz99t3LtY7+F7KaZXbic2hGM5t4x5ztmb57OlXkJmhiFpM5+Ayyxuuac5BGikcR7+MJwCUlwX75WikjMMqLtqlj63vYroHeCHOY6TNxwS70njdA1glCVBw9FY+CFN5+p2ECEaaG3jJU9CxAR4GqJ1q9kXI6wxionf+10D253LpOX9egxI/Wa5gkEJUNkrur1A22LSu5k5zCXDVfSWe4LP0unBqmCYbXdcFKxAymW53rP1G1CksVh3VZzGdfhIBX7Zaq+3PwsfXOtvtODhD7GX7x0z27ReMeNM7jqgiZkf2pOTuSBUneCtGXGB2CUuRFmSMWX1Rc0z4I2kVF6fB/ifPWad4HYy3/1Nty2o3HdfYGWtF8QPjkNdbnUXkxbyKF6L5SVoLlMU7J/fMLOlhKb4IW7MieI4Az0/yPeA5XScv6zLFDyqvEkc90qtB+nJTI8YVY4I0BdEzE19TUz0MvAn1gWbJXspLMzTR9ZU4UYkSCOne/3q6LLk26snGehj3dmg6xiVc0kQIQ7AQbiK1tz9eew/FodrvnITbccMEj5hsLhMsfxu7GDx/QkuJFwHhtBORKBEczjTU0gzxexREosQFBBMKlfGnrYw8BWAHkxl+9J0NVgELDY46VolImZ0TJkTg5Bh7TAihR3YlEEoRoM/wYtgPW1UJINQcpRW19gVisobH+W1owCWD/89qoH2H/n1ZtiHvo8XXpBb8OPJuZuRwZn7NJrB12ICSJu1o87sPcOtuYbzcElDJJm+XGfltzuhdOTFD2IpZ5mCY7Q3IEWAncj+VPsbwjPOlvefaSnJJEiDlzYsgCqMxhu5nTA8BvgOLpmNHe5qkK7up+hAzhGg3+W1Goc3v7RIZ3utRcLe1JmyEP1kickjWPDa3cAyDabhx/fNad53Xzo8tFs/FIL+MX4NaGkr605VKdm53TL/+gC6QJ08H2u25qDbSLzHJmvs+xu6YXIBWKxa4/Pzht9ymB+m09kimgOpBSdqGp3xENDjaTqR1jLyOFUjdeztTkrH0ZNPVVuz+6nCnoi5Tf/2Ihqx4ta+fMvYGj/ABpISYgudbNpoYbLhvRg45/Vnx7yLwPHhrHQDAMBYCKha1Z1ndt8FsCygs964kqXC/wjqjolmeb/H1US918Y6x6UNbSRTUPattHNytKI4rxiA08jONctLaVEa+Ji1008PdD0ZxQ7srBePsdEmQ+3iqvbiYWZZpQXaIU+gpUjfq70OgG18HHfYCJP9qHpqVWt1FxnyFQKbdoa4a9DpQi7ZuD8xNiKY1fYWiubMwCO8tVeuw2DFv7u7DVnqMOZm8e7gacYUej4BXuEYSbrvigERxhqBiruEEWOGj97Fi8tHTgQPo1rD4wEbV6PLJreMZ/3oLT1A07BV6U4HbnDzHyIz8bcXwjRbUvKECMf4SfMsF54RZiOEcapc0SE0IIjqkYMVYmNjz2uNx+OCXek8boHQbJVuYrhl9FFJRHEb1zAsGrqn0gZhmbE8XQwHwOcFcMGamQbsvrIMPu8jMUN4+tcGgAqc6xRCHljKPlsvMKRtUv2OvcVxQW36If2NfAe9ZhY3ldQucCFr5jlN3Y6LATq+WlFnEgIPt0Si9mMcDVaDOczIG4zaBQ7qm7GWpLPiZ1o/DsBloiMx5St5gSSg+YEXJdVYc5Kp9pJ8Y/TQFzugndpD8eYwv/UfqaYhdah9svr2xXbFmpjjwJIOgaG+/et/OGO4GHY35kBOMsPg51bDIMe8s/qzdHdmu4EOsi32cmEslERfvTiddIBS/3k5MqUdqVfWci4tpofHdU6MCpYbRi3E0ENWtwM1NipcWNIo0l3vJ8xrkUDtFYAIIAWzTQJHmV01X9chsOVYMmcnIa3Kvbi0zTq33/FV/qL8rrbWefANY8fRH9eLlM+fclQab/AFTA9A+VgH7heleakTrHKNe2jvGCEXJsGJK7G7OfgKCQm/RkpEyoDTXedge9bqyt6v+IT/6Fn+H2BNN4s82UhwIt9ThKkoQsOjOemWZJgmvjPvu0LvdRU12dNuBZFJ85njTErWUPH9x2mJg5C3/Gxvn20ZpzHmG4aO76yLpPTJ4PzvyHxL6yiPeIfQdxQFvKUxxwpe1PS0Hk4Ti0qPhuUen6KURF8dhM9sGzxeuNZVfagG7QPL45H2A4Nb/2bmYdDKsPRNMu/cN5omqRSbKXIHuwfcQ+pZN2I/Mo5kxxJZP51SB7280kPqqYNdnKNDT52FjdiM2bFXT17QgllMAaM1yloFeXKanJGnVTm2C0mWxBp/lDqokbRf97U7fVio76nKXhP69wh8n0qKxuOAqrz84vin2NkL8MoFVW3m6Bv/5P4re9lUWoMg54Aox1BCyW9NlEVw/IQFx8LCfa0Lrljd+HK+otfvlIg37an/pXkot5VWl0lM1FliAQLY+OMUkUWeMRFhbUMzFu5VCngr3XidE4CqDzQEtAttUg2v6iyTzx6ZitLm+sskbk1Dt3+YQ0o9OEfXHoN7BHOucib729v/P3J1DjBIRz6qrEd68KhUu5DZLLDUYAruRjXqU+71Y5o8QpneI1SYnuvcZWlCGNA6uwugn4UkAkSf8mrxcFmP4lG2HfqfS402pvBesALkpZn+dgpufATuST/VgTcDVpSSFDOcao0qVyVjeX+VMORRta9dszFu6+GtfsStmpV6AN+0dBLnTd4LudlT0vTOnzQvizLzvtPbiNkAgEhHmaYQGILSim4ZhQhGhWjUoIHVQtfRHo7+qYrP0U81Bd5wihjlkG2fVWv5uYATJb4AAAAA==";

console.log("Hello World");
var mainTitle = document.createElement("h1");
mainTitle.textContent = ' I love JS';
var jsImageHtml = document.createElement('img');
jsImageHtml.className = 'js-image';
jsImageHtml.src = JS_IMAGE;
document.body.append(mainTitle, jsImageHtml);