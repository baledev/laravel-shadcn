import { PageProps } from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Header } from "@/Components/header";
import { Head } from "@inertiajs/react";
import { DataTable } from "@/Components/data-table/data-table";
import fs from "fs/promises";
import path from "node:path";
import { z } from "zod"
import { taskSchema } from "@/Components/data-table/data/schema";
import { columns } from "@/Components/data-table/columns";

async function getTasks() {
    // const data = await fs.readFile(
    //   path.join(process.cwd(), "resources/js/Components/data-table/data/tasks.json")
    // )
    // console.log(import.meta.env.BASE_URL + 'resources/js/Components/data-table/data/tasks.json')
    console.log(process.env)

    // const tasks = JSON.parse(data.toString())

    // return z.array(taskSchema).parse(tasks)
    }

export default function Tasks({ auth }: PageProps) {
    // const tasks = await getTasks()
    console.log(path.basename('/public_html/home/index.html'))

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <Header title="Tasks" />
            }
        >
            <Head title="Tasks" />

            <DataTable data={tasks} columns={columns} />
        </AuthenticatedLayout>
    )
}
