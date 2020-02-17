[CSS Working Group](https://wiki.csswg.org/) 写的 [Incomplete List of Mistakes in the Design of CSS](https://wiki.csswg.org/ideas/mistakes) 。译的不好，请见谅。

译文：

That should be corrected if anyone invents a time machine. :P
如果有人发明了时光机，这些应该被纠正。:P
* white-space: nowrap should be white-space: no-wrap
  * and line wrapping behavior should not have been added to white-space
* white-space: nowrap 应该是 white-space: no-wrap
  * 并且超出容器是否换行不应该在 white-space 中设置
* vertical-align should not apply to table cells. Instead the CSS3 alignment properties should exist in Level 1.
* vertical-align 不应该能作用在表格元素上。相应的，CSS 1 就该有CSS3 中的对齐属性。
* vertical-align: middle should be text-middle because it's not really in the middle.
* vertical-align 应该是 text-middle，因为它并不是真正的居中。
* Percentage heights should be calculated against fill-available rather than being undefined in auto situations.
* 不知道怎么译。
* Table layout should be sane.
* Table 布局是合理的。
* No naked text mixing with elements. All raw text should have an addressable, stylable element wrapping it, created by CSS  if necessary.
* 纯文本不能和元素混在一起。所有的纯文本应该被一个可定位的，可样式化的元素包裹，如果有必要的化，该元素可以由 CSS 来创建。
* Box-sizing should be border-box by default.
* Box-sizing 的默认值应该是 border-box。
* background-size with one value should duplicate its value, not default the second one to auto.
* background-size 如果只设置一个值，第二个值应该是设置的值，而应该是 auto。
* background-position and border-spacing (all 2-axis properties) should take *vertical* first, to match with the 4-direction properties like margin.
* background-position 和 border-spacing 应该和 margin 一致：先取 垂直的值，然后是水平值。
* z-index should be called z-order or depth and should Just Work on all elements (like it does on flex items).
* z-index 应该被叫做 z-order 或 depth, 并且应该对所有元素上都有效（目前只对 positon 不为 static 的元素有效。译者注）（就像 flex items 一样）。
* word-wrap/overflow-wrap should not exist. Instead, overflow-wrap
 should be a keyword on 'white-space', like nowrap (no-wrap).
* word-wrap/overflow-wrap 不应该存在。overflow-wrap 应该是 'white-space' 上的一个值，和 nowrap (no-wrap)一样。
* The top and bottom margins of a box should never have been allowed to collapse together automatically as this is the **root of all margin-collapsing evil**.
* 盒子间的上方和下方是间距(margin)不应该被自动折叠，这也就是 ** 间距折叠地狱的根源**。
* Partial collapsing of margins instead of weird rules to handle min/max-heights?
* 部分的折叠间距而不是用怪异的规则来处理最小/最大高度的问题？
* Tables (and other non-blocks, e.g. flex containers) should form pseudo-stacking contexts.
* 表格（以及其他非块级元素，如 flex 容器）应该有 pseudo-stacking （什么鬼。。。）上下文。
* The currentcolor keyword should have a dash, current-color.
* 关键字 currentcolor 应该中间有个分号，current-color。
* There should have been a predictable color naming system instead of arbitrary X11 names.
* 应该有一个可预期的颜色命名系统而不是随意的名字。
* border-radius should have been corner-radius.
* border-radius 应该叫 corner-radius。
* Absolutely-positioned replaced elements should stretch when opposite offset properties (e.g. left+right) are set, instead of being start-aligned.
* 当相反的定位属性(如 left 和 right)被设置时，绝对定位的元素应该撑大,而不是只是根据开始值来定位。
* The hyphens property should be called hyphenate. (It's called hyphens because the XSL:FO people objected to hyphenate.)
* 连字符属性应该被叫做连字符。（被叫做连字符属性因为人们拒绝用连字符）(怎么都觉得怪怪的。。。译者注)
* rgba() and hsla() should not exist, rgb() and hsl() should have gotten an optional fourth parameter instead (and the alpha value should have used the same format as R, G, and B or S and L).
* rgba() 和 hsla() 不应该存在， rgb() 和 hsl() 应该有第四个可选的参数（并且 alpha 的值的格式应该和 R，G 和 B 或 S 和 L 的一致）。
* descendant combinator should have been »
 and indirect sibling combinator should have been ++, so there's some logical relationships among the selectors' ascii art
* 后代选择器应该是 » 不相邻的兄弟选择器应该是 ++，这样通过选择器可以知道元素间逻辑上的关系。
* the *-blend-mode properties should've just been *-blend
* *-blend-mode属性应该叫 *-blend 就可以了。
* The syntax of unicode ranges should have consistent with the rest of CSS, likeu0001-u00c8.
* unicode 的范围语法应该和 CSS 的其他语法一致，如 u0001-u00c8。
* font-family should have required the font name to be quoted (like all other values that come from “outside” CSS). The rules for handling unquoted font names make parsing font stupid, as it requires a font-size value for disambiguation.
* 字体设置名字时应该用双引号来包住字体名称（就像其他来自“外部”的CSS一样）。这规则导致解析没被双引号包含的字体的方式很傻，因为这让字体大小的值变得有歧义。
* Flexbox should have been less crazy about flex-basis vs width/height. Perhaps: if width/height is auto, use flex-basis; otherwise, stick with width/height as an inflexible size. (This also makes min/max width/height behavior fall out of the generic definition.)
* 不知道怎么译。
* :empty should have been :void, and :empty should select items that contain only white space
* :empty 应该叫 :void，并且 :empty 包括只内容只有空格的元素。
* table-layout: fixed; width: auto should result in a fill-available table with fixed-layout columns.
* 不知道怎么译。
* 'text-orientation' should have had upright as the initial value (given the latest changes to 'writing-mode').
* 'text-orientation' 的初始值应该是 upright（不知道怎么译）。
* The @import rule is required to (a) always hit the network unless you specify cache headers, and (b) construct fresh CSSStyleSheet objects for every import, even if they're identical. It should have had more aggressive URL-based deduping and allowed sharing of stylesheet objects.
* 不知道怎么译。
* Selectors have terrible future-proofing. We should have split on top-level commas, and only ignored unknown/invalid segments, not the entire thing.
* 选择器有个糟糕的未知的特性。我们应该将选择器按逗号分隔，只忽略未知或非法的部分，而不是全部。
* :link should have had the :any-link semantics all along.
* :link 应该有 :any-link 的意思。（关于见 :any-link 的介绍见 [What's the :any-link pseudo-class for?](http://stackoverflow.com/questions/14436526/whats-the-any-link-pseudo-class-for) 译者注）。
* The flex shorthand (and flex-shrink and flex-grow longhands) should accept fr units instead of bare numbers to represent flex fractions.
* flex的简写（全写是flex-shrink 和 flex-grow）应该介绍 fr 单位(什么鬼) 而不是仅仅是数字来表示缩放的权重。
* The display property should be called display-type.
* display 属性应该为 display-type。

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
