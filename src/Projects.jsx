import { Link } from "@mui/material";
import React from "react";
import { RxDividerHorizontal } from "react-icons/rx";
import { TiTickOutline } from "react-icons/ti";

function Projects() {
  return (
    <div className="bg-[#F7F7F7] pb-12">
      <div className="max-w-7xl mx-auto">
        <div>
          <p className="text-xl text-[#898A9B] py-2 flex items-center">
            <RxDividerHorizontal className="text-6xl pr-4" />
            PORTFOLIO
          </p>
          <h3 className="text-black font-bold text-4xl pt-4 mb-8">
            Personal Projects
          </h3>
        </div>
        <div className="md:grid grid-cols-3">
          {/*Card 1*/}
          <div className="card card-compact w-96 bg-base-100 shadow-xl overflow-hidden group relative">
            <figure>
              <img
                className="h-80 w-full"
                src="studysync.png"
                alt="StudySync"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">StudySync Network</h2>
              <p>
                StudySync Network is a web application designed to facilitate
                group study and assignment management for students and
                educators. It provides a platform for creating, submitting, and
                managing assignments efficiently.
              </p>
              <div className="absolute inset-0 bg-opacity-0 bg-slate-600 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
              <div
                className="absolute bottom-0 left-0 w-full transition-all
               duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 pb-4 flex justify-around"
              >
                <button className="btn btn-primary">LiveSite</button>
                <button className="btn bg-green-500">GitHub</button>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn bg-sky-300"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Details
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <img
                      className="h-80 w-full"
                      src="studysync.png"
                      alt="StudySync"
                    />
                    <div className="flex">
                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        React Js
                      </p>
                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        Express Js
                      </p>
                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        Tailwind CSS
                      </p>
                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        MongoDB
                      </p>
                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        Firebase Authentication
                      </p>
                    </div>
                    <p className="py-4">
                      StudySync Network is a web application designed to
                      facilitate group study and assignment management for
                      students and educators. It provides a platform for
                      creating, submitting, and managing assignments
                      efficiently.
                    </p>
                    <p className="py-2 bg-slate-200 font-bold text-lg px-6">
                      Features
                    </p>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Fully Responsive
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> CRUD Operations
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Private/Protected Routes
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Firebase Authentication
                    </span>
                    <span className="flex py-1">
                      <TiTickOutline /> JWT token creation upon user
                      login/Registration for secure authentication
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> PDF Reviewer
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Theme Toggling (Light/Dark)
                    </span>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
          {/*Card 2*/}
          <div className="card card-compact w-96 bg-base-100 shadow-xl overflow-hidden group relative">
            <figure>
              <img
                className="h-80 w-full"
                src="artisnaAura.png"
                alt="StudySync"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">ArtisanAura</h2>
              <p>
                ArtisanAura is a site where customers find the desired Arts and
                Crafts.
              </p>
              <div className="absolute inset-0 bg-opacity-0 bg-slate-600 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
              <div
                className="absolute bottom-0 left-0 w-full transition-all
               duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 pb-4 flex justify-around"
              >
                <a href="https://artisanaura-e3235.web.app" target="_blank">
                  <button className="btn btn-primary">LiveSite</button>
                </a>
                <a
                  href="https://github.com/SRakiB23/ArtisanAura-client"
                  target="_blank"
                >
                  <button className="btn bg-green-500">GitHub</button>
                </a>
                <button
                  className="btn bg-sky-300"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Details
                </button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <img
                      className="h-80 w-full"
                      src="artisnaAura.png"
                      alt="StudySync"
                    />
                    <div className="flex gap-2">
                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        React Js
                      </p>
                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        Express Js
                      </p>
                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        Tailwind CSS
                      </p>
                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        MongoDB
                      </p>
                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        Firebase Authentication
                      </p>
                    </div>
                    <p className="py-4">
                      ArtisanAura is a site where customers find the desired
                      Arts and Crafts. Create available Arts and Crafts, Delete
                      and Update! Find the desired arts and crafts by sorting
                    </p>
                    <p className="py-2">
                      {" "}
                      <span className="font-bold">Visit:</span>
                      <a
                        className="underline pl-2 text-base"
                        href="https://artisanaura-e3235.web.app/"
                        target="_blank"
                      >
                        https://artisanaura-e3235.web.app/
                      </a>
                    </p>
                    <p className="py-2 bg-slate-200 font-bold text-lg px-6">
                      Features
                    </p>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Fully Responsive
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Private/Protected Routes
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Firebase Authentication
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> CRUD Operations
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Theme Toggling (Light/Dark)
                    </span>
                    <p className="py-2 bg-slate-200 font-bold text-lg px-6">
                      NPM Packages
                    </p>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> React-simple-typewriter
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> React Awesome reveal
                    </span>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
          {/*Card 3*/}
          <div className="card card-compact w-96 bg-base-100 shadow-xl overflow-hidden group relative">
            <figure>
              <img className="h-80 w-full" src="nest.png" alt="StudySync" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">NestQuest</h2>
              <p>
                NestQuest is a website for customers to find the desired
                property they are looking for!
              </p>
              <div className="absolute inset-0 bg-opacity-0 bg-slate-600 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
              <div
                className="absolute bottom-0 left-0 w-full transition-all
               duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 pb-4 flex justify-around"
              >
                <a
                  href="https://real-state-assignment-e805a.web.app/"
                  target="_blank"
                >
                  <button className="btn btn-primary">LiveSite</button>
                </a>
                <a href="https://github.com/SRakiB23/NestQuest">
                  <button className="btn bg-green-500">GitHub</button>
                </a>
                <button
                  className="btn bg-sky-300"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Details
                </button>
                <dialog id="my_modal_5" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <img
                      className="h-80 w-full"
                      src="nest.png"
                      alt="StudySync"
                    />
                    <div className="flex gap-2">
                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        React Js
                      </p>

                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        Tailwind CSS
                      </p>

                      <p className="bg-slate-200 rounded-xl p-1  mt-2 text-center">
                        Firebase Authentication
                      </p>
                    </div>
                    <p className="py-4">
                      NestQuest is a site where customers find the desired
                      property.
                    </p>
                    <p className="py-2">
                      {" "}
                      <span className="font-bold">Visit:</span>
                      <a
                        className="underline pl-2 text-base"
                        href="https://real-state-assignment-e805a.web.app/"
                        target="_blank"
                      >
                        https://real-state-assignment-e805a.web.app/
                      </a>
                    </p>
                    <p className="py-2 bg-slate-200 font-bold text-lg px-6">
                      Features
                    </p>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Fully Responsive
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Private/Protected Routes
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Firebase Authentication
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Update Profile Details
                    </span>
                    <p className="py-2 bg-slate-200 font-bold text-lg px-6">
                      NPM Packages
                    </p>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> AOS
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> Animate CSS
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> React Leaflet
                    </span>
                    <span className="flex items-center py-1">
                      <TiTickOutline /> React CountUp
                    </span>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
