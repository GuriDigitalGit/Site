import { Fragment } from 'react';

// Renderizador simples do texto vindo do painel (Portable Text do Sanity).
// Suporta parágrafos, títulos, citações, listas, negrito, itálico, links e imagens.

function renderInline(block) {
  const defs = Object.fromEntries((block.markDefs || []).map((def) => [def._key, def]));
  return (block.children || []).map((child, index) => {
    let node = child.text;
    (child.marks || []).forEach((mark) => {
      if (mark === 'strong') node = <strong>{node}</strong>;
      else if (mark === 'em') node = <em>{node}</em>;
      else if (mark === 'underline') node = <u>{node}</u>;
      else if (mark === 'code') node = <code>{node}</code>;
      else if (defs[mark]?.href) {
        const href = defs[mark].href;
        node = <a href={href} target={/^https?:/.test(href) ? '_blank' : undefined} rel="noreferrer">{node}</a>;
      }
    });
    return <Fragment key={child._key || index}>{node}</Fragment>;
  });
}

function renderBlock(block, key) {
  switch (block.style) {
    case 'h2': return <h2 key={key}>{renderInline(block)}</h2>;
    case 'h3': return <h3 key={key}>{renderInline(block)}</h3>;
    case 'blockquote': return <blockquote key={key}>{renderInline(block)}</blockquote>;
    default: return <p key={key}>{renderInline(block)}</p>;
  }
}

export default function PortableBody({ value }) {
  const out = [];
  let list = null;
  (value || []).forEach((block, index) => {
    const key = block._key || index;
    if (block._type === 'block' && block.listItem) {
      if (!list || list.type !== block.listItem) {
        list = { type: block.listItem, items: [], key };
        out.push(list);
      }
      list.items.push(<li key={key}>{renderInline(block)}</li>);
      return;
    }
    list = null;
    if (block._type === 'image' && block.url) {
      out.push(
        <figure className="sx-figure" key={key}>
          <img src={`${block.url}?w=1400&auto=format&q=82`} alt={block.alt || ''} loading="lazy" />
          {block.alt && <figcaption>{block.alt}</figcaption>}
        </figure>,
      );
    } else if (block._type === 'block') {
      out.push(renderBlock(block, key));
    }
  });
  return out.map((item) => {
    if (item && item.items) {
      const Tag = item.type === 'number' ? 'ol' : 'ul';
      return <Tag key={item.key}>{item.items}</Tag>;
    }
    return item;
  });
}
