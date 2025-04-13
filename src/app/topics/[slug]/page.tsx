interface TopicShowPageProps {
    params: Promise<{slug: string}>
}

export default async function TopicShowPage({params}:TopicShowPageProps){
    const {slug} = await params;

    return (
        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="col-span-3">
            <div className="text-2xl font-bold mb-2">
              {slug}  
            </div>
          </div>
    
          <div>
          </div>
        </div>
    );
}

