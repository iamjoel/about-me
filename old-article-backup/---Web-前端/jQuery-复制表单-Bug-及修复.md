## Bug 的详细描述
当 jQuery 复制表单时，会漏复制 textarea 和 select 的值。更详细的描述见 http://bugs.jquery.com/ticket/3016

## 解决方案
### 方案一
重写 jQuery 的复制元素的方法： jQuery.fn.clone
```
(function(original) {
  jQuery.fn.clone = function() {
    var result = original.apply(this, arguments),
      my_textareas = this.find('textarea').add(this.filter('textarea')),
      result_textareas = result.find('textarea').add(result.filter('textarea')),
      my_selects = this.find('select').add(this.filter('select')),
      result_selects = result.find('select').add(result.filter('select'));
    for (var i = 0, l = my_textareas.length; i < l; ++i) $(result_textareas[i]).val($(my_textareas[i]).val());
    for (var i = 0, l = my_selects.length; i < l; ++i) {
      for (var j = 0, m = my_selects[i].options.length; j < m; ++j) {
        if (my_selects[i].options[j].selected === true) {
          result_selects[i].options[j].selected = true;
        }
      }
    }
    return result;
  };
})(jQuery.fn.clone);
```
带注释版见[这里](`https://github.com/spencertipping/jquery.fix.clone/blob/master/jquery.fix.clone.js`) 。

### 方案二
新建一个 API，只在复制表单元素时用。代码如下
```
$.fn.cloneForm = function() {
  var $form = $(this);
  var $clonedForm = $form.clone();
  var $missingClonedInput = $clonedForm.find('textarea,select');
  $form.find('textarea,select').each(function(index) {
    $missingClonedInput.eq(index).val($(this).val());
  });
  return $clonedForm;
}
```

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
