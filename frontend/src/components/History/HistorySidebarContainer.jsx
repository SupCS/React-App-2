import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory, clearHistory } from "../../redux/historySlice";
import HistorySidebar from "./HistorySidebar";

const HistorySidebarContainer = ({ isOpen, onClose, currentBoardId }) => {
    const dispatch = useDispatch();
    const { logs, status } = useSelector((state) => state.history);

    useEffect(() => {
        if (isOpen && currentBoardId) {
            dispatch(fetchHistory(currentBoardId));
        }
    }, [isOpen, currentBoardId, dispatch]);

    const handleClearHistory = () => {
        dispatch(clearHistory(currentBoardId));
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isOpen && !event.target.closest(".history-sidebar")) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, onClose]);

    return (
        <HistorySidebar
            isOpen={isOpen}
            onClose={onClose}
            logs={logs}
            status={status}
            onClearHistory={handleClearHistory}
        />
    );
};

export default HistorySidebarContainer;
