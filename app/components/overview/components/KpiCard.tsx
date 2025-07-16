"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { type ElementType } from "react";
import { SvgIconProps } from "@mui/material";

interface Props {
  title: string;
  count: number | string;
  color: string;
  icon: ElementType<SvgIconProps>;
  desc: string;
  onClickAction: () => void;
}

export default function KpiCard({
  title,
  count,
  color,
  icon: Icon,
  desc,
  onClickAction,
}: Props) {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClickAction}
    >
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon fontSize="small" className={`ml-auto ${color}`} />
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold">{count}</div>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  );
}
