# Map #

[Demo](https://MERNCraft.github.io/map)

A CSS-only demonstration of using `:hover` to increment a counter.

Columns and rows in the grid are overlapping nested `<div>` elements. The elements to the right and the bottom are contained in the elements to their left or above them. When the cursor is at the bottom right, it hovers 10 nested column elements and 5 nested row elements. Each of these elements is used to increment a counter:

```css
div.className:hover {
  counter-increment: counter-name;
}
```

All the row elements are told to show which column and row they belong to, but they are also told to stay hidden.

```css
div[class^=row]::before {
  content: counter(col, upper-alpha) counter(row);
  display: none;
}
```

Only the stack of nested row elements are told that they can display themselves...

```css
div[class^=row]:hover::before {
  display: inline-block;
}
```

... but any which contain _another_ row element which is hovered over are told to hide themselves again, so only the top-most cell shows its identity.

```css
div[class^=row]:has(:hover)::before {
  display: none;
}
```

Note the use of `counter(col, upper-alpha)` to use upper-case letters to identify the columns.

---

A similar system is used for displaying the height of a simulated hill or the depth of a simulated sea. This shows that the nested elements can be any shape.

---

The sliding selector for Grid or Relief is created with a single checkbox, and the help of a label and a span.

```html
<label>
  <input
    type="checkbox"
    autofocus
  >
  <span></span>
</label>
```
Browsers automatically allow you use the spacebar to toggle this checkbox, and switch between the two displays.