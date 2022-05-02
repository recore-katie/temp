import React from "react";
import dynamic from "next/dynamic";

const Document = dynamic(
  //@ts-ignore
  import("@react-pdf/renderer").then((module) => module.Document),
  {
    loading: ({ error }) => {
      if (error) {
        console.error(error, "document");
        return <div>Error!Document</div>;
      }
      return <div>Loading Document</div>;
    },
    ssr: false,
  }
);

const Page = dynamic(
  //@ts-ignore
  import("@react-pdf/renderer").then((module) => module.Page),
  {
    loading: ({ error }) => {
      if (error) {
        console.error(error, "Page");
        return <div>Error!Page</div>;
      }
      return <div>Loading Page</div>;
    },
    ssr: false,
  }
);

const Text = dynamic(
  //@ts-ignore
  import("@react-pdf/renderer").then((module) => module.View),
  {
    loading: ({ error }) => {
      if (error) {
        console.error(error, "text");
        return <div>Error!Text</div>;
      }
      return <div>Loading Text</div>;
    },
    ssr: false,
  }
);

const View = dynamic(
  //@ts-ignore
  import("@react-pdf/renderer").then((module) => module.View),
  {
    loading: ({ error }) => {
      if (error) {
        console.error(error, "view");
        return <div>Error!View</div>;
      }
      return <div>Loading View</div>;
    },
    ssr: false,
  }
);

export default function TempDocument() {
  return (
    <Document>
      <Page
        //@ts-ignore
        wrap={false}
        break
        size={[80, 60]}
      >
        <View>
          <Text>Please display</Text>
        </View>
      </Page>
    </Document>
  );
}
