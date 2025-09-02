## AlgoCasts Interview Cheat Sheet

A compact reference of solved exercises in this repo: problem intent, key patterns, and complexity.

### Strings

- **Reverse String**: Build reversed string by iterating or use array helpers.
  - Pattern: two-pointer or reduce/split-reverse-join.
  - Complexity: O(n) time, O(n) space (or O(1) if in-place two-pointer on array of chars).
- **Palindrome**: String equals its reverse or mirrored index check.
  - Pattern: `str[i] === str[len - 1 - i]` for all i.
  - Complexity: O(n) time, O(1) space (ignoring reverse approach memory).
- **Max Char**: Most frequent character in a string.
  - Pattern: frequency map, track max.
  - Complexity: O(n) time, O(k) where k is alphabet size in input.
- **Anagrams**: Two strings use the same letters with the same counts.
  - Patterns:
    - Normalize then sort + compare.
    - Or frequency maps compare counts (handles punctuation/whitespace by cleaning).
  - Complexity: O(n log n) with sort; O(n) with maps.
- **Vowels Count**: Count 'aeiou' (case-insensitive).
  - Pattern: regex `match(/[aeiou]/gi)` length or iterate with Set lookup.
  - Complexity: O(n) time, O(1) space.
- **Capitalize Words**: Uppercase first letter of each word.
  - Pattern: scan string; if previous char is space, uppercase; or split/join mapping first char.
  - Complexity: O(n) time, O(n) space.

### Numbers

- **Reverse Int**: Reverse digits, preserve sign.
  - Pattern: string conversion, `parseInt(reversed) * Math.sign(n)`.
  - Complexity: O(d) time, O(d) space where d = number of digits.
- **FizzBuzz**: Classic divisibility print/return problem.
  - Pattern: check 15 first, then 3, then 5; or build string from rules.
  - Complexity: O(n) time, O(1) space.

### Arrays

- **Chunk Array**: Split array into subarrays of size `size`.
  - Patterns:
    - Slicing increments of size.
    - Or build chunked and push to last subarray until size reached.
  - Complexity: O(n) time, O(n) space.
- **Matrix Spiral**: Fill N×N in spiral order with incrementing values.
  - Pattern: maintain boundaries (`startRow`, `endRow`, `startCol`, `endCol`) and shrink inward.
  - Complexity: O(n^2) time, O(n^2) space.

### Data Structures

- **Stack**: LIFO with `push`, `pop`, `peek` using array.
  - Complexity: O(1) per op amortized.
- **Queue**: FIFO with `add` (enqueue), `remove` (dequeue), `peek`.
  - Implementation here: internal array using `unshift` + `pop`.
  - Complexity: O(1) per op amortized.
- **Weave Two Queues**: Interleave elements from two queues into a new queue.
  - Pattern: while either `peek()`, alternately `remove()` to target queue.
  - Constraint: only use Queue API, not internal arrays.
- **Queue From Stacks**: Implement queue using two stacks.
  - Pattern: On `remove`/`peek`, move all from `first` to `second`, take from `second`, move back.
  - Complexity: Amortized O(1) per op (O(n) worst-case on transfer).
- **Events (Pub/Sub)**: Minimal eventing with `on(event, cb)`, `trigger(event)`, `off(event)`.
  - Pattern: map of event name to list of callbacks; trigger iterates and calls.
  - Complexity: `on/off` O(1) avg, `trigger` O(k) where k = listeners for event.

### Linked Lists

- **Singly Linked List**: `Node(data, next)`, `LinkedList` with methods:
  - `insertFirst`, `insertLast`, `removeFirst`, `removeLast`, `getFirst`, `getLast`, `getAt`, `removeAt`, `insertAt`, `clear`, `size`, `forEach`, iterator.
  - Complexity: Most targeted ops O(1) at head/tail when tracked; indexed ops O(n).
- **Midpoint**: Return middle node (for even, end of first half).
  - Pattern: fast/slow pointers; move fast by 2, slow by 1.
  - Complexity: O(n) time, O(1) space.
- **From Last (kth from end)**: Return node n from end.
  - Pattern: advance `fast` n steps, then move `fast` and `slow` together until `fast` hits end.
  - Complexity: O(n) time, O(1) space.
- **Circular**: Detect cycle in list.
  - Pattern: Floyd’s Tortoise and Hare; if `slow === fast` at any point, cycle.
  - Complexity: O(n) time, O(1) space.

### Trees

- **General Tree**: `Node(data)` with `children[]`, `add`, `remove`.
  - **BFS (traverseBF)**: Use queue; visit level by level.
  - **DFS (traverseDF)**: Use stack behavior (unshift children) or recursion.
  - Complexity: O(n) time, O(w) space where w is max width (BFS) or height (DFS).
- **Binary Search Tree (BST)**: `insert`, `contains`.
  - Pattern: recursive descent left/right based on value.
  - Average: O(log n) insert/find; Worst: O(n) when unbalanced.
- **Validate BST**: Ensure all node values obey min/max constraints.
  - Pattern: recurse with range `[min, max)`; check node within range.
  - Complexity: O(n) time, O(h) space where h = height.
- **Level Width**: Count nodes at each depth.
  - Pattern: BFS queue with sentinel (e.g., `'s'`) to mark level boundaries; increment counters.
  - Complexity: O(n) time, O(w) space.

### Patterns (Printing)

- **Steps**: Print N rows with left-aligned steps (spaces on right).
  - Pattern: nested loops or recursion building strings; `column <= row` decides `#`.
  - Complexity: O(n^2).
- **Pyramid**: Centered steps with spaces on both sides.
  - Pattern: compute midpoint, fill `#` when `mid - row <= col <= mid + row`.
  - Complexity: O(n^2).

### Sorting

- **Bubble Sort**: Repeatedly swap adjacent out-of-order elements.
  - Complexity: O(n^2) time, O(1) space; stable.
- **Selection Sort**: Select min and swap into position i.
  - Complexity: O(n^2) time, O(1) space; not stable (typical variant).
- **Merge Sort**: Divide and conquer; merge two sorted halves.
  - Complexity: O(n log n) time, O(n) space; stable.
  - Merge Pattern: Compare heads, push smaller, then spread remainder.

### Common Patterns & Tips

- **Frequency Map**: Use object or Map to count occurrences.
- **Two Pointers**: Opposite ends or fast/slow for linked lists.
- **Sliding Window**: Not used here, but great for substrings/subarrays.
- **BFS/DFS**: Queue for BFS, stack/recursion for DFS.
- **Normalization**: For anagrams, strip non-word chars and lowercase.
- **Amortized Analysis**: Queue-from-stacks has O(1) average cost per op.

### Quick Reference Code Snippets

```js
// Reverse string (reduce)
const reverse = (s) => s.split("").reduce((r, c) => c + r, "");

// Palindrome (mirror check)
const isPal = (s) => s.split("").every((ch, i) => ch === s[s.length - 1 - i]);

// Max char (frequency)
function maxChar(s) {
  const m = {};
  let best = "",
    max = 0;
  for (const c of s) m[c] = (m[c] || 0) + 1;
  for (const c in m)
    if (m[c] > max) {
      max = m[c];
      best = c;
    }
  return best;
}

// Anagrams (clean + sort)
const clean = (s) =>
  s.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
const anagrams = (a, b) => clean(a) === clean(b);

// Vowels count
const vowels = (s) => (s.match(/[aeiou]/gi) || []).length;

// Reverse int
function reverseInt(n) {
  const r = String(Math.abs(n)).split("").reverse().join("");
  return Math.sign(n) * parseInt(r);
}

// Chunk array
function chunk(arr, size) {
  const out = [];
  let i = 0;
  while (i < arr.length) {
    out.push(arr.slice(i, i + size));
    i += size;
  }
  return out;
}

// Fast/Slow midpoint
function midpoint(list) {
  let slow = list.getFirst(),
    fast = list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// From last (kth from end)
function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

// Detect cycle
function circular(list) {
  let slow = list.getFirst(),
    fast = list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// Validate BST
function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) return false;
  if (min !== null && node.data < min) return false;
  if (node.left && !validate(node.left, min, node.data)) return false;
  if (node.right && !validate(node.right, node.data, max)) return false;
  return true;
}

// Merge two sorted arrays (for merge sort)
function merge(a, b) {
  const out = [];
  while (a.length && b.length) out.push(a[0] < b[0] ? a.shift() : b.shift());
  return out.concat(a, b);
}

// QUEUE EXAMPLE
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
```

### Complexity Table (Selected)

- Reverse String / Palindrome / Vowels / MaxChar / Anagrams (map): O(n)
- Reverse Int: O(d)
- Chunk / Steps / Pyramid / Matrix: O(n^2) for pattern prints/matrix
- BFS/DFS Traversal: O(n)
- Validate BST: O(n)
- Sorting: Bubble/Selection O(n^2), Merge O(n log n)

Good luck! Practice explaining trade-offs, constraints, and why you chose a pattern.
