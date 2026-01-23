import { ImageResponse } from "next/og";

/**
 * 生成og图片 中生成 Open Graph (OG) 图像
 * @param request
 * @returns
 */
export async function GET(request: Request) {
  const geist = await fetch(new URL("/Geist-Regular.ttf", request.url)).then(
    (res) => res.arrayBuffer(),
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <span
        style={{
          fontSize: 144,
          fontFamily: "Geist",
          fontWeight: 400,
          color: "white",
          letterSpacing: "-0.02em",
        }}
      >
        json-render
      </span>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: geist,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
