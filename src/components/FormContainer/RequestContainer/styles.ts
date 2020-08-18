import { css } from "@emotion/core";

export const addressStyle = css`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
`;

const commonInputStyle = css`
  border: 1px solid #bbb;
  background: #f5f5f5;
  border-radius: 2px;
  font-size: 13px;
  height: 36px;
  padding: 0 10px;
  box-sizing: border-box;
  transition: background-color 0.15s;
  
  &:focus {
    background: #fff;
    outline: none;
  }
`;

export const selectStyle = css`
  ${commonInputStyle}
  border-radius: 3px 0 0 3px;
  width: 100px;
`;

export const addressInputStyle = css`
  ${commonInputStyle}
  border-radius: 0 3px 3px 0;
  margin-left: -1px;
  width: calc(100% - 190px);
`;

export const buttonStyle = css`
  margin-left: 5px;
  width: 85px;
  font-weight: bold;
  height: 36px;
  padding: 0 10px;
`;

export const tabStyle = css`
  && {
    display: flex;
    border-bottom: 1px dotted #ddd;
    padding: 0 10px;
    
    li {
      padding: 15px 10px;
      position: relative;
      color: #aaa;
      font-size: 13px;
      cursor: pointer;
      transition: color 0.3s;
      
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        right: 50%;
        height: 3px;
        background: #06F;
        bottom: -1px;
        transition-property: left, right;
        transition-duration: 0.3s;
      }
      
      &:hover {
        color: #000;
      }
      
      &.active {
        color: #000;
        &::after {
          left: 0;
          right: 0;
        }
      }
    }
  }
`;

export const requestTableStyles = css`
  && {
    padding: 20px;
    
    .noneData {
      background: #f5f5f5;
      border-radius: 3px;
      border: 1px solid #ddd;
      padding: 20px 0;
      text-align: center;
      color: #666;
      font-size: 13px;
    }
    
    ul {
      max-width: 1000px;
    }
    
    li {
      margin-bottom: 5px;
    }
  }
`;