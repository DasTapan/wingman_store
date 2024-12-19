"use client";

import { ArrowUpDown, ArrowUpRight } from "lucide-react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  PaginationState,
  getPaginationRowModel,
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

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
  {
    id: "5",
    product: {
      name: "4K Monitor",
      icon: "avatars/avatar.svg",
    },
    date: "22 Mar '2024",
    time: "10:30 AM",
    timeSpent: "2h 30m",
    orderValue: 399.99,
    commission: 80,
  },
  {
    id: "6",
    product: {
      name: "Mechanical Keyboard",
      icon: "avatars/avatar.svg",
    },
    date: "05 Mar '2024",
    time: "01:15 PM",
    timeSpent: "1h 20m",
    orderValue: 129.99,
    commission: 39,
  },
  {
    id: "7",
    product: {
      name: "Wireless Mouse",
      icon: "avatars/avatar.svg",
    },
    date: "12 Apr '2024",
    time: "03:45 PM",
    timeSpent: "0h 45m",
    orderValue: 49.99,
    commission: 15,
  },
  {
    id: "8",
    product: {
      name: "Gaming Headset",
      icon: "avatars/avatar.svg",
    },
    date: "25 Mar '2024",
    time: "11:20 AM",
    timeSpent: "1h 55m",
    orderValue: 199.99,
    commission: 60,
  },
  {
    id: "9",
    product: {
      name: "Webcam HD",
      icon: "avatars/avatar.svg",
    },
    date: "18 Feb '2024",
    time: "09:40 AM",
    timeSpent: "1h 10m",
    orderValue: 79.99,
    commission: 24,
  },
  {
    id: "10",
    product: {
      name: "External SSD",
      icon: "avatars/avatar.svg",
    },
    date: "03 Apr '2024",
    time: "02:30 PM",
    timeSpent: "2h 05m",
    orderValue: 159.99,
    commission: 48,
  },
  {
    id: "11",
    product: {
      name: "Graphics Tablet",
      icon: "avatars/avatar.svg",
    },
    date: "09 Mar '2024",
    time: "10:15 AM",
    timeSpent: "3h 00m",
    orderValue: 299.99,
    commission: 75,
  },
  {
    id: "12",
    product: {
      name: "Bluetooth Speaker",
      icon: "avatars/avatar.svg",
    },
    date: "14 Apr '2024",
    time: "04:25 PM",
    timeSpent: "1h 30m",
    orderValue: 89.99,
    commission: 27,
  },
  {
    id: "13",
    product: {
      name: "Docking Station",
      icon: "avatars/avatar.svg",
    },
    date: "01 Mar '2024",
    time: "11:50 AM",
    timeSpent: "2h 40m",
    orderValue: 179.99,
    commission: 54,
  },
  {
    id: "14",
    product: {
      name: "Ergonomic Mouse",
      icon: "avatars/avatar.svg",
    },
    date: "20 Feb '2024",
    time: "01:35 PM",
    timeSpent: "1h 15m",
    orderValue: 69.99,
    commission: 21,
  },
  {
    id: "15",
    product: {
      name: "Wireless Earbuds",
      icon: "avatars/avatar.svg",
    },
    date: "16 Apr '2024",
    time: "03:20 PM",
    timeSpent: "0h 50m",
    orderValue: 129.99,
    commission: 39,
  },
  {
    id: "16",
    product: {
      name: "Mechanical Numpad",
      icon: "avatars/avatar.svg",
    },
    date: "11 Mar '2024",
    time: "10:45 AM",
    timeSpent: "1h 40m",
    orderValue: 45.99,
    commission: 14,
  },
  {
    id: "17",
    product: {
      name: "USB Microphone",
      icon: "avatars/avatar.svg",
    },
    date: "27 Mar '2024",
    time: "02:15 PM",
    timeSpent: "2h 20m",
    orderValue: 119.99,
    commission: 36,
  },
  {
    id: "18",
    product: {
      name: "Cable Management Kit",
      icon: "avatars/avatar.svg",
    },
    date: "04 Apr '2024",
    time: "09:55 AM",
    timeSpent: "1h 05m",
    orderValue: 29.99,
    commission: 9,
  },
  {
    id: "19",
    product: {
      name: "Laptop Stand",
      icon: "avatars/avatar.svg",
    },
    date: "23 Feb '2024",
    time: "03:40 PM",
    timeSpent: "1h 25m",
    orderValue: 49.99,
    commission: 15,
  },
  {
    id: "20",
    product: {
      name: "LED Monitor Light",
      icon: "avatars/avatar.svg",
    },
    date: "08 Apr '2024",
    time: "12:05 PM",
    timeSpent: "1h 35m",
    orderValue: 59.99,
    commission: 18,
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
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      sorting,
      pagination,
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

        <Pagination className="my-5">
          <PaginationContent>
            {/* Previous */}
            <PaginationItem>
              {!table.getCanPreviousPage() ? (
                <PaginationPrevious
                  href=""
                  className="hover:cursor-not-allowed"
                  aria-disabled
                />
              ) : (
                <PaginationPrevious
                  href=""
                  onClick={() => table.previousPage()}
                />
              )}
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                href=""
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                isActive={true}
              >
                {table.getState().pagination.pageIndex + 1}
              </PaginationLink>
            </PaginationItem>
            <span className="mx-2">...</span>
            {/* Next */}
            <PaginationItem>
              {!table.getCanNextPage() ? (
                <PaginationNext
                  href=""
                  className="hover:cursor-not-allowed"
                  aria-disabled
                />
              ) : (
                <PaginationNext href="" onClick={() => table.nextPage()} />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
