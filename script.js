const input = document.getElementById('inputText');
const stats = document.getElementById('stats');

function toUpperCase() {
  input.value = input.value.toUpperCase();
}

function toLowerCase() {
  input.value = input.value.toLowerCase();
}

function toTitleCase() {
  input.value = input.value
    .toLowerCase()
    .replace(/(?:^|\s|-)\S/g, c => c.toUpperCase());
}

function toSentenceCase() {
  input.value = input.value
    .toLowerCase()
    .replace(/(^\\s*\\w|[.!?]\\s*\\w)/g, c => c.toUpperCase());
}

function toSnakeCase() {
  input.value = input.value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}

function toKebabCase() {
  input.value = input.value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$|--+/g, '');
}

function removeDuplicates() {
  const lines = input.value.split('\\n');
  const unique = [...new Set(lines)];
  input.value = unique.join('\\n');
}

function countStats() {
  const text = input.value;
  const words = text.trim().match(/\\b\\w+\\b/g);
  const wordCount = words ? words.length : 0;
  const charCount = text.replace(/\\s/g, '').length;
  stats.innerText = `Words: ${wordCount} | Characters (no spaces): ${charCount}`;
}

function clearText() {
  input.value = '';
  stats.innerText = '';
}
