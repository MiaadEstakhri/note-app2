import React from "react";

const NoteList = ({ notes }) => {
  return (
    <ul className="w-100 overflow-auto px-3">
      {notes.map((item) => {
        return (
          <li
            className="w-100 input-note py-2  px-3 rounded-3 shadow-sm mb-3"
            key={item.id}>
            <h5 className="text-capitalize fw-bold">{item.title}</h5>
            <div className="w-100 d-flex justify-content-between">
              <span className="text-break text-capitalize text-muted">
                {item.description}
              </span>
              <div className="d-flex align-items-end  justify-content-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mb-1 me-2 ms-3"
                />
                <button className="border-0 bg-transparent">🗑️</button>
              </div>
            </div>
            <div className="border m-2 "></div>
            <div className="w-100 text-center text-muted my-1">
              {new Date(item.createAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NoteList;
