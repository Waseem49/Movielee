import dbconnect from "@/utils/dbconnect";
import contactModel from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const reqbody = await req.json();
    console.log(reqbody);
    await dbconnect();
    await contactModel.create(reqbody);
    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!", e },
      { status: 500 }
    );
  }
}
