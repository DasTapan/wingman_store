"use client";

import { ArrowUpDown, ArrowUpRight } from "lucide-react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

interface Order {
  id: string;
  product: {
    name: string;
    icon: string;
  };
  date: string;
  time: string;
  timeSpent: string;
  orderValue: number;
  commission: number;
}

const data: Order[] = [
  {
    id: "1",
    product: {
      name: "Premium Headphones",
      icon: "avatars/avatar.svg",
    },
    date: "15 Mar '2024",
    time: "09:17 AM",
    timeSpent: "1h 45m",
    orderValue: 89.99,
    commission: 32,
  },
  {
    id: "2",
    product: {
      name: "Wireless Keyboard",
      icon: "avatars/avatar.svg",
    },
    date: "28 Feb '2024",
    time: "02:45 PM",
    timeSpent: "3h 20m",
    orderValue: 154.5,
    commission: 48,
  },
  {
    id: "3",
    product: {
      name: "Gaming Mouse",
      icon: "avatars/avatar.svg",
    },
    date: "07 Apr '2024",
    time: "11:30 AM",
    timeSpent: "0h 55m",
    orderValue: 75.25,
    commission: 28,
  },
  {
    id: "4",
    product: {
      name: "USB-C Hub",
      icon: "avatars/avatar.svg",
    },
    date: "19 Apr '2024",
    time: "04:10 PM",
    timeSpent: "2h 15m",
    orderValue: 135.75,
    commission: 42,
  },
];

const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent px-0"
        >
          Product
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const product = row.original.product;
      return (
        <div className="flex items-center gap-2">
          <Image
            src={product.icon}
            alt={product.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span>{product.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent px-0"
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <span>{row.original.date}</span>
          <span className="text-sm text-muted-foreground">
            {row.original.time}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "timeSpent",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent px-0"
        >
          Time spent
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "orderValue",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent px-0"
        >
          Order Value
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("orderValue"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return formatted;
    },
  },
  {
    accessorKey: "commission",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent px-0"
        >
          Commission
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("commission"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return formatted;
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <Link href="/chats">
          <Button variant="ghost" size="sm" className="hover:bg-transparent">
            View Chat
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      );
    },
  },
];

export default function OrdersTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
    <div className="w-full">
      <h3 className="font-medium text-xl mb-4">Orders</h3>
      <div className="rounded-lg border border-[#DCDFE4]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-[#F9FAFB] hover:bg-[#F3F4F6]"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-left">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-[#F3F4F6]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-left">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="hover:bg-[#F3F4F6]">
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
