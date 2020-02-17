## 会进行真值，假值判断的地方
* if，else if
* switch
* while，for
* &&，||：逻辑与逻辑或
* !!： 转化成布尔值

## 假值
* undefined
* null
* 0，+0，-0
* NaN
* ''
* ""
* false

## 验证代码
```
  var falseyValue = undefined || null || 0 || +0 || -0 || NaN || '' || "" || false;
  if (falseyValue) {

  } else if (falseyValue) {

  } else {
    console.log('pass: if');
  }

  switch (falseyValue) {
    case false:
      console.log('pass: switch');
  }


  var i = 0;
  while (i < 1 && falseyValue) {
    console.error('fail: while');
    i++;
  }

  for (i = 0; i < 1 && falseyValue; i++) {
    console.error('fail: for');
  }

  !undefined && !null && !0 && !+0 && !-0 && !NaN && !'' && !"" && !false && console.log('pass: &&');
  falseyValue || console.log('pass: ||');

  !!undefined || console.log('pass: !! undefined');
  !!null || console.log('pass: !! null');
  !!0 || console.log('pass: !! 0');
  !!NaN || console.log('pass: !! NaN');
  !!'' || console.log('pass: !! \'\'');
  !!"" || console.log('pass: !! ""');
  !!false || console.log('pass: !! false');
```

## 参考
* [Truthy & Falsey](http://james.padolsey.com/javascript/truthy-falsey/)
