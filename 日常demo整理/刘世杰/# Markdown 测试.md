# Markdown 测试

[TOC]
## 代码块
```ruby
def robot_invasion
    puts("robot " * 1000)
end
```

## 流程图
```flow
st=>start: 开始
e=>end: 结束
op=>operation: 我的操作
cond=>condition: 确认？

st->op->cond
cond(yes)->e
cond(no)->op
```

## 表格
姓名 | 技能 | 排行
--- | :---: | ---:
刘备123 | 哭 | 大哥123
关羽 | 打 | 二哥
张飞 | 骂 | 三弟

## 列表
* A
    - A1
    - A2
- B
    - B1
- C

## 任务列表
- [x] 已完成列表
- [ ] 未完成列表

## 分割线
true
***
false
*****

## 公式
块级公式：
$$  x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

\\[ \frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} =
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
{1+\frac{e^{-8\pi}} {1+\ldots} } } } \\]

行内公式： $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$

## 引用
代码如下：
> a + b = c
> c ++;

## 字体
**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
## 脚注
这是一个脚注：[^point]
1
2
3

[^point]: 这里是脚注信息