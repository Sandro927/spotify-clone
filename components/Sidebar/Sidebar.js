import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon
} from "@heroicons/react/outline"

function Sidebar() {
  return (
    <div>
        <div>
            <button>
                <HomeIcon className="h-5 w-5"/>
                <p>Home</p>
            </button>
            <button>
                <HomeIcon className="h-5 w-5"/>
                <p>Home</p>
            </button>
            <button>
                <HomeIcon className="h-5 w-5"/>
                <p>Home</p>
            </button>
            <button>
                <HomeIcon className="h-5 w-5"/>
                <p>Home</p>
            </button>
            <button>
                <HomeIcon className="h-5 w-5"/>
                <p>Home</p>
            </button>
        </div>
    </div>
  )
}

export default Sidebar