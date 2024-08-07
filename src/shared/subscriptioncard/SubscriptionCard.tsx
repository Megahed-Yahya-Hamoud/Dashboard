import React from 'react';
import classes from "./SubscriptionCard.module.css";
import { IoMdCheckmark } from "react-icons/io";
export default function SubscriptionCard() {
  return (
    <div className={classes.card}>
      <div>
        <h3 className={classes.title}>ربع سنوي (مقترح)</h3>
        <p className={classes.price}>900ج م</p>
        <p className={classes.description}>
          يمنح هذا الاشتراك المستخدم الفرصة للاشتراك لمدة ثلاثة أشهر
        </p>
      </div>
      <div>
        <ul className={classes.features}>
          <li>
            <IoMdCheckmark className={classes.icon} /> ربع سنوي (ثلاثة أشهر)
          </li>
          <li>
            <IoMdCheckmark className={classes.icon} /> فيديوهات تعليمية
          </li>
          <li>
            <IoMdCheckmark className={classes.icon} /> امتحانات سابقة وحلها
          </li>
          <li>
            <IoMdCheckmark className={classes.icon} /> أساتذة على أعلى مستوى
          </li>
        </ul>
      </div>
      <button className={classes.subscribeButton}>اشترك</button>
    </div>
  );
}


