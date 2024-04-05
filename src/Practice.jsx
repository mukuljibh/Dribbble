import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

export default function Practice() {
    return (
        <div className='border-8 ' >

            <div className="border border-orange-950	" style={{ background: "red", flexBasis: "100px" }}>
                red
            </div>
            <div style={{ background: "green", flexBasis: "100px" }}>
                green
            </div>
            <div style={{ background: "yellow", flexBasis: "10px" }}>
                yellow
            </div>

        </div>
    );
}
