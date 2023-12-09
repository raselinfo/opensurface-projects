import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

import { z } from "zod";

export const GET = (req: NextRequest) => {
  try {
    // Headers can be read from the request
    const reqHeaders = new Headers(req.headers);
    // console.log(reqHeaders.get('x-forwarded-for'))

    // Query Params can be read from the request
    // http://localhost:3000/api/product?name=rasel&age=30
    const reqQueryParams = new URL(req.url);
    //   console.log(reqQueryParams.searchParams.get("name"));
    //   console.log(reqQueryParams.searchParams.get("age"));

    const url = req.nextUrl.searchParams;
    // console.log(url.get("name"))
    // console.log(url.get("age"))

    const cookie = req.cookies;
    //   console.log(cookie.get("your_cookie_name"));

    const cookie2 = cookies();
    console.log(cookie2.get("your_cookie_name"));

    return NextResponse.json({ message: "Hello World" });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const bodySchema = z.object({
      name: z.string().min(3).max(20),
      age: z.number().min(1).max(100).or(z.string().min(1).max(3)),
    });

    type TBody = z.infer<typeof bodySchema>;

    // ✔ Data come from the request body
    // const body: TBody = await req.json();
    // const data = bodySchema.parse(body);

    // ✔ Data come from request form data
    const formData: FormData = await req.formData();

    const data2 = bodySchema.parse(Object.fromEntries(formData));

    console.log(data2);
    return NextResponse.json(
      { message: "POST Request", data: data2 },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
