import React from 'react'

export default function ArtworkCard({ title, media, file }) {
  return (
    <div className="work-container">
        <img src={file} alt={title}/>
        <div className="medium">{media}</div>
    </div>
  );
}

