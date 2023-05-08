import React from "react";
import "./MenuList.css";
import MenuListItem from "../MenuListItem/MenuListItem";

export default function MenuList({ mood, onItemClick }) {
  const menus = ["좋아요!", "정말 좋아요!", "최고에요!", "미쳤어요!"];
  return (
    <ul className="container-list">
      {menus.map((moodEl) => {
        return (
          <MenuListItem
            mood={moodEl}
            isSelected={mood === moodEl}
            onClick={onItemClick}
          />
        );
      })}
    </ul>
  );
}
